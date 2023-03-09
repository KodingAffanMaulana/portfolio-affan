<template>
  <header class="shadow-lg bg-white text-xl">
    <nav class="container mx-auto p-4 pr-12 pl-8 flex justify-between fixed bg-blue-100 z-10">
      <NuxtLink to="/" class="font-bold">Fan<span class="text-blue-500">Port</span></NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/project">Project</NuxtLink></li>
        <li><NuxtLink to="/certificate">Certificate</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- Output Page Content -->
  <div class="">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: aqua;
}
</style>
