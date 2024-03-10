<template>
    <main >
        <div v-if="content" class="flex flex-row justify-end items-center text-4xl gap-4">
            <ButtonSavePost :item="content" />
            <template v-for="link in links" :key="link.name">
                <NuxtLink v-if="getLink(link.name)" :to="getLink(link.name)" target="blank">
                    <UTooltip :text="link.tooltip" :popper="{ placement: 'top' }" >
                        <Icon :name="link.icon"/>
                    </UTooltip>
                </NuxtLink>
            </template>
        </div>
        <div class="markdown">
            <ContentDoc  />
        </div>
    </main>
  </template>


<script lang="ts" setup>
import { CONTENT_LINKS, type Post } from '~/types';


definePageMeta({
    layout: 'full-width'
})

const path = useRoute();

const { data: content } = await useAsyncData<Post>('slug', () => queryContent<Post>(path.path).findOne())

const links = CONTENT_LINKS; 

const getLink = (link: any) => {
    if (!content.value) return 
    
    // @ts-ignore
    return content.value[link]
}

</script>