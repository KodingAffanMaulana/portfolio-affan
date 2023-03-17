<template>
  <div class="card text-center">
    <div class="flex justify-between">
      <button>{{ product.tags }}</button>
    </div>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/articles/${product.id}`"
      ><p class="btn my-4">View Details</p></NuxtLink
    >
  </div>
</template>

<script setup>
const { product } = defineProps(["articles"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
