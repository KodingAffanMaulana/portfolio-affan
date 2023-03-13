<template>
  <header class="text-[1rem]">
    <nav class="py-4 px-4 sm:px-32 bg-gray-800 flex justify-between w-full fixed z-10">
      <NuxtLink to="/" class="font-bold text-white">Fan<span class="text-blue-500">Port</span></NuxtLink>
      <ul class="flex gap-4 text-[1rem]">
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
