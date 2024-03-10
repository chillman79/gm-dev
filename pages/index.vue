<template>
  <main class="text-center">
    <h1 class="text-5xl font-bold">
      Welcome to <span class="text-primary-500">{{ config.appName }}</span
      >!
    </h1>

    <p class="mt-10 text-lg">
      At {{ config.appName }}, you will discover a curated collection of libraries, code snippets, and games developed using Game Maker, all
      presented in organized and accessible format. You are invited to
      contribute through GitHub, where you can create entries for each section
      of the website using Markdown.
    </p>

    <NuxtLink
      to="/blog/contribute"
      class="text-2xl text-primary-500"
    >
      <h3>Learn how to contribute.</h3>
    </NuxtLink>

    <div class="text-left w-full">
      <ContentDoc path="other/links" />

      <ContentDoc path="other/about" />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: "Game Maker Dev",
  ogTitle: "Game Maker Dev",
  description: "At Game Maker Dev, you will discover a curated collection of libraries, code snippets, and games developed using Game Maker, all presented in an organized and accessible format.",
  ogDescription: "At Game Maker Dev, you will discover a curated collection of libraries, code snippets, and games developed using Game Maker, all presented in an organized and accessible format.",
});

const config = useAppConfig();
</script>
