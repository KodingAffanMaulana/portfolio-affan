<template>
  <div>
    <ArticlesDetail :articles="articles" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = "https://dummyjson.com/posts/" + id;

// Fetch data
const { data: articles } = await useFetch(url, { key: id });

if (!articles.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}
</script>

<style scoped></style>
