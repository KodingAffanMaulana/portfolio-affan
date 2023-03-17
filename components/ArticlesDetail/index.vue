<template>
  <div class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-8 sm:pt-28">
    <div class="">
      <div class="h-[300px] flex justify-center">
        <img
          :src="`https://source.unsplash.com/random/300×300`"
          class="w-[800px] h-[300px] object-cover"
          alt="photos"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ articles.title }}</h2>
        <p class="text-xl my-7">Price - ${{ articles.body }}</p>
        <div v-for="k in articles.tags">
          <h2 class="font-bold border-b-2 mb-4 pb-2">{{ k }}</h2>
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
