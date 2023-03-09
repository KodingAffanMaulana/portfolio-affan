<template>
  <header class="shadow-lg bg-white text-xl">
    <nav class="mx-auto px-2 sm:px-6 lg:px-16 bg-gray-800 flex justify-between fixed w-full z-10 sm:p-4">
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
