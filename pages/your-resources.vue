<template>
  <div class="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
    <div class="col-span-12">
      
        <ContentItem v-for="item in posts.find()" :key="item.title" :item="item" />
      
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "full-width",
});

const posts = usePosts();
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
