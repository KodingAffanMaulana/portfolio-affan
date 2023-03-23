<template>
  <div>
    <main class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 pt-[4.5rem] sm:p-8 sm:pt-[5.5rem]">
      <div class="drop-shadow-2xl">
        <section class="bg-white">
          <Hero class="lg:px-24 px-4 pb-8" />
          <ExperienceSection class="px-4 lg:px-24 pb-8 lg:pb-32" />
          <Skills class="px-4 lg:px-24 pb-8 sm:pb-32" />
          <Educational class="px-4 lg:px-24 pb-4 lg:pb-32" />
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html,
body {
  overflow-x: hidden;
}
</style>
