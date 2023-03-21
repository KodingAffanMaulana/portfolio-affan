<template>
  <nav class="py-4 px-4 sm:px-32 bg-gray-800 flex justify-between w-full fixed z-10">
    <NuxtLink to="/" class="font-bold text-white">Fan<span class="text-blue-600">Port</span></NuxtLink>
    <button @click="isMenuOpen = true" class="block sm:hidden text-white  ">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path v-if="!isMenuOpen" class="block" d="M4 6H20M4 12H20M4 18H20"></path>
        <path v-if="isMenuOpen" class="absolute top-[100%]" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <div :class="isMenuOpen ? 'left-[50%] sm:left-[100%]' : 'left-[100%]'"
      class="bg-gray-800 text-black-primary text-center fixed top-0 left-[100%] transition-all w-1/2 h-screen flex items-center justify-center">
      <ul class='container mx-auto flex flex-col items-center justify-between gap-7 font-bold'>
        <button @click="isMenuOpen = false"
          class="sm:hidden text-gray-1000 text-2xl block py-1 sm:hidden absolute top-2 right-6"><i
            class="bi bi-x-lg"></i></button>
        <li class='text-xl font-medium'>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class='text-xl font-medium'>
          <NuxtLink to="/project">Project</NuxtLink>
        </li>
        <li class='text-xl font-medium'>
          <NuxtLink to="/certificate">Certificate</NuxtLink>
        </li>
        <li class='text-xl font-medium'>
          <NuxtLink to="/articles">Articles</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="hidden sm:flex sm:items-center sm:w-auto sm:gap-4">
      <NuxtLink class="text-white" to="/">
        Home
      </NuxtLink>
      <NuxtLink class="text-white" to="/project">
        Project
      </NuxtLink>
      <NuxtLink class="text-white" to="/certificate">
        Certificate
      </NuxtLink>
      <NuxtLink class="text-white" to="/articles">
        Articles
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>

<style>
.router-link-exact-active {
  color: aqua;
}
</style>
