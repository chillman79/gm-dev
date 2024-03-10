<template>
    <div class="text-2xl dark:text-white cursor-pointer" @click="onClick">
        <UTooltip text="Save / Unsave" :popper="{ placement: 'top' }" >
            <Icon :name="icon" />
        </UTooltip>
    </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types';


const props = defineProps({
    item: {
        type: Object as PropType<Post>, 
        required: true,
    }
})


const posts = usePosts();

const icon = computed(() => {
    const exists = posts.findOne(props.item);
    return exists ? 'ion:save' : 'ion:save-outline'
});

const onClick = () => {
    const exists = posts.findOne(props.item);
    if (exists) {
        posts.remove(props.item);
    }
    else {
        posts.save(props.item);
    }
}


</script>
