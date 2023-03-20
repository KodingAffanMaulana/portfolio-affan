<template>
  <div>
    <main class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 pt-[4.5rem] sm:p-8 sm:pt-[5.5rem]">
      <div class="drop-shadow-2xl">
        <section id="project" class="p-8 lg:px-[5rem] lg:pb-16 bg-white">
          <div class="flex flex-col items-center justify-center text-center">
            <h1 class="font-bold text-[16px] sm:text-2xl text-blue-900 p-2 sm:p-3 sm:pb-8">
              Project
            </h1>
            <br />
          </div>
          <div class="grid lg:grid-cols-4 lg:gap-8 lg:pb-8">
            <article v-for="(project, index) in projects" :key="index"
              class="pb-4 lg:pb-8 shadow-xl hover:border-[0.1rem] hover:border-blue-500 rounded-xl hover:shadow-blue-200"
              data-aos="flip-left">
              <div class="p-4">
                <h2 class="font-bold text-[13px] sm:text-xl text-center pb-2">
                  {{ project.title }}
                </h2>
                <p class="text-[10px] text-sm pb-2 text-justify">
                  {{ project.desc }}
                </p>
                <img :src="project.url" alt="fanphotos" class="object-fit cover rounded-xl pb-4" />
              </div>
              <button
                class="text-[10px] sm:text-[14px] flex mx-auto rounded-xl justify-beetween py-1 px-4 bg-blue-500 text-white hover:border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500">
                <a :href="project.link" target="_blank" rel="noopener noreferrer">Details</a>
              </button>
            </article>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const projects = ref([
  {
    title: "Gallery Photo Web",
    url: "https://iili.io/HXCyTHx.png",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://fanphotos.netlify.app/",
  },
  {
    title: "Pokemon Web",
    url: "https://iili.io/HXCy7oP.png",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://github.com/KodingAffanMaulana/react-assignment-2-v4",
  },
  {
    title: "FanYugiOh! Web",
    url: "https://iili.io/HXCyYV1.png",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://fanyugioh.netlify.app/",
  },
  {
    title: "Starwars Web",
    url: "https://iili.io/HXCy1UJ.png",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://github.com/KodingAffanMaulana/react-exercise-7-v1",
  },
  {
    title: "Kalkulator Web",
    url: "https://iili.io/HXCyxcb.jpg",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://kodingaffanmaulana.github.io/My-Kalkulator/",
  },
  {
    title: "BookShelf Web",
    url: "https://iili.io/HXCy4xS.jpg",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://kodingaffanmaulana.github.io/bookshelf-apps/",
  },
  {
    title: "LiburanLampung",
    url: "https://iili.io/HXCyANV.jpg",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://kodingaffanmaulana.github.io/Projek2/",
  },
  {
    title: "Coffe Shop",
    url: "https://iili.io/HXCyRDB.jpg",
    desc: "Lorem ipsum dolor sit amet adipisicing Animi consectetur!",
    link: "https://kodingaffanmaulana.github.io/kedaiKopi/",
  },
]);
</script>

<style scoped></style>
