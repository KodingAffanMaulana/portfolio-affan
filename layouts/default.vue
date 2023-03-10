<template>
  <header class="shadow-lg bg-white text-[1rem]">
    <nav class="mx-auto py-2 px-4 sm:px-32 bg-gray-800 flex justify-between fixed w-full z-10 sm:p-4">
      <NuxtLink to="/" class="font-bold text-white">Fan<span class="text-blue-500">Port</span></NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink class="text-white" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="text-white" to="/project">Project</NuxtLink></li>
        <li><NuxtLink class="text-white" to="/certificate">Certificate</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- Output Page Content -->
  <div>
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: aqua;
}
</style>
