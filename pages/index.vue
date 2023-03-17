<template>
  <main
    class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-8 sm:pt-[5.5rem] "
  >
    <div class="drop-shadow-2xl">
      <section id="project" class="p-2 bg-white">
        <Hero class="sm:px-32 px-16" />
        <ExperienceSection class="px-16 sm:px-32 pb-16 sm:pb-32" />
        <Skills class="px-16 sm:px-32 pb-16 sm:pb-32" />
        <Educational class="px-16 sm:px-32 pb-16 sm:pb-32" />
      </section>
    </div>
  </main>
  <Footer />
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

html, body {
  overflow-x: hidden;
}
</style>
