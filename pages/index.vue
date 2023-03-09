<template>
  <div class="p-0 m-0 box-border bg-red">
    <Hero class="sm:px-32" />
    <ExperienceSection class="sm:px-32 sm:pb-32" />
    <Skills class="sm:px-32 sm:pb-32" />
    <Educational class="sm:px-32 sm:pb-32" />
    <Footer />
  </div>
</template>

<script setup></script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
