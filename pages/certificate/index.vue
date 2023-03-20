<template>
  <div>
    <main class="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 pt-[4.5rem] sm:p-8 sm:pt-[5.5rem]">
      <div class="drop-shadow-2xl">
        <section id="education" class="p-8 lg:px-[5rem] lg:pb-16 bg-white">
          <div class="flex flex-col items-center justify-center text-center">
            <h1 class="font-bold text-[16px] sm:text-2xl text-blue-900 p-2 sm:p-3 sm:pb-4">
              Certificate
            </h1>
            <br />
          </div>
          <div class="bg-blue-50 p-2 lg:p-4 rounded-[15px]">
            <div class="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 grid gap-6">
              <article v-for="(sertif, index) in sertifs" :key="index"
                class="bg-gray-800 shadow-xl rounded-[15px] h-[auto] hover:transform hover:translate-x-4 hover:translate-y-4 hover:shadow-blue-400 hover:">
                <img class="w-[100%] object-contain rounded-t-[15px]" :src="sertif.src" alt="sertifikat1" />
                <div class="p-2 sm:p-5">
                  <h2 class="font-bold text-[13px] sm:text-xl text-teal-100 pb-1 text-center">
                    {{ sertif.title }}
                  </h2>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
const sertifs = ref([
  {
    title: "HTML & CSS",
    src: "https://iili.io/HXxo7cv.jpg",
  },
  {
    title: "Software Engineering",
    src: "https://iili.io/HXxo5KJ.jpg",
  },
  {
    title: "React JS",
    src: "https://iili.io/HXxoToF.jpg",
  },
  {
    title: "General Competence",
    src: "https://iili.io/HXxoYSR.jpg",
  },
  {
    title: "Javascript",
    src: "https://iili.io/HXxoxwP.jpg",
  },
  {
    title: "Rest API",
    src: "https://iili.io/HXxozt1.jpg",
  },
  {
    title: "Web API",
    src: "https://iili.io/HXxolAN.jpg",
  },
  {
    title: "Node JS",
    src: "https://iili.io/HXxoc9p.jpg",
  },
  {
    title: "Deployment",
    src: "https://iili.io/HXxouMg.jpg",
  },
  {
    title: "Pemrograman Web",
    src: "https://iili.io/HXxoGoX.jpg",
  },
  {
    title: "Javascript",
    src: "https://iili.io/HXxo1tt.jpg",
  },
  {
    title: "Frontend Basic",
    src: "https://iili.io/HXxo0NI.jpg",
  },
]);
</script>
