<template>
  <div class="sm:pt-6 sm:pb-10">
    <Html lang="en" />
    <NuxtLoadingIndicator color="#8bd059" />
    <Navbar />
    <div
      class="max-w-5xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg"
    >
      <main
        class="max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400"
      >
        <slot />
      </main>
    </div>
  </div>
</template>


<style>
body {
  @apply bg-gray-50 text-black dark:bg-gray-900 dark:text-white;
}
</style>