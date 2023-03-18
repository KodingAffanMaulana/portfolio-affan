<template>
  <div v-if="pending" class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 pt-[4.5rem] sm:p-8 sm:pt-[5.5rem]">
    <div class="sm:h-[20rem] grid content-center px-[30rem]">
      <div>
        <p class="text-center text-4xl font-bold rounded-md">Loading</p>
      </div>
    </div>
  </div>
  
  <div v-else class="z-1">
    <div class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-8 sm:pt-28 sm:p-32">
      <div class="grid sm:grid-cols-2 gap-4">
        <div v-for="(article, index) in articles.posts" key: index class="shadow-xl rounded-xl">
          <div class="h-[300px]">
            <img :src="`https://source.unsplash.com/random/?${article.tags[1]}`"
              class="w-[800px] h-[300px] object-cover rounded-t-xl" alt="photos" />
          </div>
          <div class="p-4">
            <p class="text-purple-500 text-[0.8rem] pb-2 font-mono">
              Phoenix Baker • 19 Jan 2022
            </p>
            <NuxtLink :to="`/articles/${index + 1}`">
              <h1 class="text-2xl font-bold hover:underline">
                {{ article.title }}
              </h1>
            </NuxtLink>
            <h1 class="text-gray-600 pb-4 text-justify text-clip">
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
      </div>
    </div>
  </div>
</template>

<script setup>
const { pending, data: articles } = useFetch("https://dummyjson.com/posts");

// const filteredArticles = articles.posts.filter((article) => article.title!=null)

// console.log(filteredArticles)
// onMounted(()=> {
//   methods: {
//     async fetchData() {
//       const response = await useFetch('https://jsonplaceholder.typicode.com/posts')
//       const data = await response.json()
//       this.items = data.slice(0, 5)
//     }
//   }
// })
// data() {
//   return {
//     items: []
//   }
// },
// mounted() {
//   this.fetchData()
// },
// methods: {
//   async fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     this.items = data.slice(0, 5)
//   }
// }
</script>

<style scoped></style>
