<template>
  <div class="flex justify-between max-w-4xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200 hidden md:block">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold text-[#8bd059]"
        class="mr-6"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <div class="md:hidden cursor-pointer dark:text-gray-100 hover:text-gray-700 text-2xl">
        <Icon name="ion:menu" @click="toggleMenu"/>
    </div>
    <div v-if="showMenu" class="absolute top-14 bg-gray-50 dark:bg-gray-900 z-50 bottom-0 left-0 right-0 w-full h-full text-gray-700 dark:text-gray-200">
        <div class="flex flex-col gap-4 text-3xl px-3">
            <NuxtLink
                v-for="link of navigation"
                :key="link._path"
                :to="link._path"
                active-class="font-bold text-[#8bd059]"
                class="mr-6"
            >
                {{ link.title }}
            </NuxtLink>
        </div>
    </div>


    <!-- Social icons & Color Mode -->
    <div class="flex gap-4 flex-row items-center transition text-gray-500 !text-xl">
      <ColorModeSwitch
        class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
      />
      <NuxtLink to="https://github.com/chillman79/gm-dev" target="blank">
        <Icon name="bxl:github" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const posts = usePosts();

const navigation = computed(() => {
    
  const ret = [
    {
      _path: "/",
      title: "Home",
    }, 
    {
      _path: "/lib",
      title: "Libraries",
    },
    {
      _path: "/snippets",
      title: "Snippets",
    },
    {
      _path: "/games",
      title: "Made with GM",
    },
    {
      _path: "/blog",
      title: "Blog",
    },
  ];

  if (posts.posts.value.length) {
    ret.push({
      _path: "/your-resources",
      title: "Saved resources",
    });
  }
  return ret;
});

const showMenu = ref<boolean>(false);
const toggleMenu = () => {
    showMenu.value = !showMenu.value;
}

const route = useRoute(); 
watch(() => route.path, () => {
    showMenu.value = false;
})

</script>
