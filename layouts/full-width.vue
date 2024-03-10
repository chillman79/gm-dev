<template>
    <div class="sm:pt-6 sm:pb-10">
        <Html lang="en" />
        <NuxtLoadingIndicator color="#8bd059"/>
        <Navbar />
        <div class="py-10 m-auto bg-white sm:px-8 ring-1 ring-gray-200 dark:ring-gray-700 dark:bg-gray-800 sm:rounded">
          <main class="max-w-4xl px-4 mx-auto ">
            <slot>
              <h1 class="text-2xl">
                Page not found
              </h1>
            </slot>
          </main>
        </div>
    </div>
  </template>