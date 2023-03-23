<template>
  <div>
    <ArticlesDetail :articles="articles" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'articles'
})

const { id } = useRoute().params;
const url = "https://dummyjson.com/posts/" + (id+1);

// Fetch data
const { data: articles } = await useFetch(url, { key: id });

if (!articles.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}


</script>

<style scoped></style>
