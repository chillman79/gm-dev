<template>
    <div  class="rounded-2xl mb-6 shadow w-full bg-gray-50 text-black dark:bg-gray-900 dark:text-white p-6 flex flex-row gap-3">
        <div v-if="item.cover && item.coverPosition === 'left'">
            <img :src="item.cover" class="rounded-2xl" />
        </div>
        <div class="flex flex-col gap-4 w-full justify-between">
            <div v-if="item.cover && item.coverPosition === 'up'">
                <img :src="item.cover" class="rounded-2xl w-full" />
            </div>
            <div class="flex flex-row justify-between w-full">
                <NuxtLink :to="item._path"  class="flex flex-col gap-2">
                    <h2 class="text-4xl font-bold ">{{ item.title }}</h2>
                    <h3 v-if="item.author" class="text-black dark:text-gray-50 italic text-sm">By {{ item.author  }}
                    </h3>
                </NuxtLink>
                <ButtonSavePost :item="item" />
            </div>
            <div v-if="tags?.length" class="flex flex-row items-center gap-2">
                <div v-for="tag in tags" class="text-sm whitespace-nowrap bg-primary-500 px-2 py-1 rounded-full">
                    {{ tag }}
                </div>
            </div>
            <p v-if="item.description" class="text-lg py-3">{{ item.description }}</p>
            <div class="text-4xl flex flex-row w-full items-center gap-4">
                <template v-for="link in links" :key="link.name">
                    <NuxtLink  v-if="item[link.name]" :to="item[link.name]" target="blank">
                        <UTooltip :text="link.tooltip" :popper="{ placement: 'top' }" >
                            <Icon :name="link.icon"/>
                        </UTooltip>
                    </NuxtLink> 
                </template>
            </div>
        </div>
    </div >
</template>

<script setup lang="ts">
import { CONTENT_LINKS, type Post } from '~/types';


const props = defineProps({
    item: {
        type: Object as PropType<Post>,
        required: true,
    }
})

const links = CONTENT_LINKS; 

const tags = computed(() => {
    return props.item.tags?.split(', ') || [];
})

</script>

<style scoped>

</style> 