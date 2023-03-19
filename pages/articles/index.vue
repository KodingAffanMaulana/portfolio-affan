<template>
  <div v-if="pending" class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 pt-[4.5rem] sm:p-8 sm:pt-[5.5rem]">
    <div class="sm:h-[20rem] grid content-center px-[30rem]">
      <div>
        <p class="text-center text-4xl font-bold rounded-md">Loading...</p>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-8 sm:pt-24 sm:p-32">
      <div class="article1">
        <div class="w-[1,440px] h-[456px] py-[96px] gap-[64px] text-center">
          <p class="text-[16px] text-[#6941C6] font-semibold">Our blog</p>
          <p class="text-[48px] text-[#101828] p-2 font-semibold">Resources and insights</p>
          <p class="text-[20px] text-[#475467] pb-4">The latest industry news, interviews, technologies, and resources.
          </p>

          <div class="lg:flex lg:flex-row items-center justify-center py-12px px-14 gap-[8px] grid justify-items-stretch">
            <div><input class="w-[360px] text-[#667085] h-[48px] rounded-[8px]" type="email" name="email" id="email"
                placeholder="Enter your email">
            </div>
            <div><button class="bg-[#7F56D9] w-[129px] rounded-[8px] h-[48px] items-center text-[12px] text-white"
                type="submit">Get started</button></div>
          </div>

          <p class="text-[14px] text-center lg:pr-[13rem] pt-1">
            We care about your data in our <span class="underline">privacy policy</span>.
          </p>
        </div>
      </div>


      <div class="shadow-2xl p-8 rounded-xl">
        <div class="StaticFirst">
          <div>
            <img :src="`https://source.unsplash.com/random/`" class="w-full lg:h-[418px] object-cover" alt="photos" />
          </div>
          <div class="">
            <p class="text-purple-500 text-[14px] pt-4 pb-2 font-mono">
              Affan Maulana • 19 Jan 2022
            </p>
            <NuxtLink :to="`/articles/1`">
              <h1 class="text-2xl font-bold hover:underline text-[30px]">Design by Affan Maulana
              </h1>
            </NuxtLink>
            <h1 class="text-gray-600 py-2 text-justify text-clip">How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </h1>
            <div class="flex flex-row gap-2 pb-12">
              <div v-for="tag in tags" class="">
                <div class="font-[Inter] text-white">
                  <button class="px-2 py-1 text-[14px] bg-blue-500 rounded-lg hover:bg-blue-900 hover:text-white">
                    {{ tag.genre }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="(article, index) in articles.posts" :key="index" class="shadow-xl rounded-xl">
            <ArticlesCard :article="article" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const { pending, data: articles } = useFetch("https://dummyjson.com/posts");

const tags = ref([
  {
    genre: 'funny',
  },
  {
    genre: 'happy',
  },
  {
    genre: 'smile',
  }
]);
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
