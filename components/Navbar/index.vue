<template>
  <nav
    class="py-4 px-4 sm:px-32 bg-gray-800 flex justify-between w-full fixed z-10"
  >
    <nuxt-link to="/" class="font-bold text-white"
      >Fan<span class="text-blue-500">Port</span></nuxt-link
    >
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="block md:hidden text-white focus:outline-none"
    >
      <svg
        class="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          v-if="!isMenuOpen"
          class="block"
          d="M4 6H20M4 12H20M4 18H20"
        ></path>
        <path v-if="isMenuOpen" class="block" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <div
      :class="{
        hidden: !isMenuOpen,
        block: isMenuOpen,
      }"
      class="md:flex md:items-center md:w-auto"
    >
      <div class="md:flex-grow">
        <nuxt-link
          class="block mt-10 md:inline-block md:mt-0 text-white mr-4"
          to="/"
        >
          Home
        </nuxt-link>
        <nuxt-link
          class="block mt-10 md:inline-block md:mt-0 text-white mr-4"
          to="/project"
        >
          Project
        </nuxt-link>
        <nuxt-link
          class="block mt-10 md:inline-block md:mt-0 text-white mr-4"
          to="/certificate"
        >
          Certificate
        </nuxt-link>
        <nuxt-link
          class="block mt-10 mb-10 md:mb-0 md:inline-block md:mt-0 text-white"
          to="/articles"
        >
          Articles
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style>
.router-link-exact-active {
  color: aqua;
}
</style>
