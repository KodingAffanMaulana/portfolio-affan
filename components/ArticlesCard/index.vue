<template>
  <div>
    <!-- <div v-for="(article, index) in articles" :key="article.id" class="shadow-xl rounded-xl"> -->
    <div class="lg:h-[300px]">
      <img :src="`https://source.unsplash.com/random/?${article.tags[1]}`"
        class="w-full lg:w-[800px] sm:h-[200px] lg:h-[300px] max-h-[200px] object-cover rounded-t-xl" alt="photos" />
    </div>
    <div class="p-4">
      <p class="text-purple-500 text-[0.8rem] pb-2 font-mono">
        Affan Maulana • 19 Mar 2022
      </p>
      <NuxtLink :to="`/articles/${article.id}`">
        <h1 class="text-xl sm:text-2xl font-bold hover:underline">
          {{ article.title }}
        </h1>
      </NuxtLink>
      <h1 class="text-gray-600 pb-4 text-justify">
        {{ article.body }}
      </h1>
      <div class="flex flex-row gap-2">
        <div v-for="tag in article.tags" class="">
          <div class="font-[Inter] text-white">
            <button class="px-2 py-1 bg-blue-500 rounded-lg hover:bg-blue-900 hover:text-white">
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { article } = defineProps(["article"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
