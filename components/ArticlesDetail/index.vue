<template>
  <div class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-8 sm:pt-24">
    <div class="p-8 shadow-2xl">
      <h2 class="text-4xl my-7 text-center">{{ articles.title }}</h2>
      <div class="py-8">
        <div
          class="w-full h-[20rem] rounded-xl shadow-xl hover:bg-blue-500 object-contain bg-[url('https://source.unsplash.com/random/')]">
        </div>
      </div>
      <div class="">
        <p class="text-xl">Description,</p>
        <p class="text-xl pb-4">{{ articles.body }}</p>
        <div class="border-b-2 flex gap-4 justify-center">
          <div v-for="k in articles.tags">
            <h2 class="font-bold mb-4 pb-2">{{ k }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { articles } = defineProps(["articles"]);
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>
