<template>
        <div class="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div class="col-span-12">
                <UInput
                    icon="i-heroicons-magnifying-glass-20-solid"
                    size="sm"
                    color="white"
                    :trailing="false"
                    placeholder="Search by title, author, tag..."
                    v-model="input"
                    :loading="isLoading"
                />
            </div>
          
            <div class="col-span-12">
                <ContentList :path="path" :query="query" >
                    <template  #default="{ list }">
                        <ContentItem v-for="item in list" :key="item._path" :item="item" />
                    </template>

                    <template #not-found>
                        <p>No items found.</p>
                    </template>
                </ContentList>
            </div>
            
            <div ref="observerElement" class="col-span-12">
                <UProgress v-if="query.limit && query.limit < totalItems" animation="carousel" />
            </div>
        </div>
    
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';


const props = defineProps({
    path: {
        type: String,
        required: true
    }
})

const input = ref('');
const isLoading = ref<boolean>(false);
const observerElement = ref(null); 
const query: QueryBuilderParams = reactive({ where: [], limit: 10 });
const totalItems = ref<number>(1);

const getTotalItems = async () => {
    try {
        const count = await queryContent(props.path).where(query.where ? query.where[0] : {}).count();
        totalItems.value = count
    }
    catch (err) {
        console.log(err);
    }
}
getTotalItems();

const resetQuery = () => {
    query.where = []; 
    query.limit = 10;
}

const search = async () => {
    if (!input.value) {
        resetQuery()
        return;
    }

    query.where = [{
        $or: [
            {
                title: { $icontains: input.value }
            },
            {
                tags: { $icontains: input.value }
            },
            {
                author: { $icontains: input.value }
            }
        ], 
    }]
    query.limit = -1;
}

watch(input, () => {
    if (!input.value) {
        resetQuery()
        return;
    }
});
watchDebounced(input, search, { debounce: 500, maxWait: 1000 }, )

const { stop } = useIntersectionObserver(
  observerElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
        getTotalItems();
        query.limit = (query.limit || 0) + 10;
    }
  },
  {
    threshold: 0.5,
  }
);

onUnmounted(() => {
  stop();
});

</script>

<style scoped>
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
    .max-w-7xl {
        max-width: 80rem;
    }
</style>