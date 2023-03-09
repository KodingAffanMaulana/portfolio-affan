<template>
  <main>
    <div class="mb-5 flex flex-col items-center justify-center text-center">
      <img
        src="@/assets/icons/education.png"
        alt="logo"
        class="w-16 mb-3 mx-auto"
      />
      <h4 class="font-bold text-blue-600">Educational</h4>
    </div>

    <div class="sm:flex sm:mx-auto sm:justify-between sm:align-center sm:p-8">
      <div class="divSatu opacity-0 sm:opacity-100 sm:flex flex-wrap sm:flex-col w-2/4">
        <VCard>
          <img
            src="@/assets/images/unila.jpeg"
            alt="unila"
            class="object-fit cover w-[300px] rounded-2xl"
          /> </VCard
        ><VCard>
          <img
            rounded="2xl"
            src="@/assets/images/sma.jpeg"
            alt="sma"
            class="object-fit cover w-[300px] rounded-2xl"
          /> </VCard
        ><VCard>
          <img
            rounded="2xl"
            src="@/assets/images/smp.jpg"
            alt="unila"
            class="object-fit cover w-[300px] rounded-2xl"
          />
        </VCard>
      </div>
      <hr class="vertical sm:mt-[20rem] sm:mr-[5rem] sm:w-2/4 opacity-0 sm:opacity-100" />
      <div class="divDua sm:flex sm:flex-wrap sm:flex-col">
        <article
          class="p-5 shadow-md rounded border-t-[6px] border-blue-900 md:border-none"
        >
          <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">
            Universitas Lampung
          </h2>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">
            Teknik Informatika
          </p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">IPK 3.88</p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">
            2020 - Sekarang
          </p>
        </article>
        <br />
        <article
          class="p-5 shadow-md rounded border-t-[6px] border-blue-600 md:border-none"
        >
          <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">
            SMA YP UNILA
          </h2>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">MIPA</p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">
            Average Report (88/100)
          </p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">
            2017 - 2020
          </p>
        </article>
        <br />
        <article
          class="p-5 shadow-md rounded border-t-[6px] border-blue-600 md:border-none"
        >
          <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:py-4">
            SMPN 02 Penawartama
          </h2>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">IPA</p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">
            General Champion
          </p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">
            2014 - 2017
          </p>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
hr.vertical {
  background-color: #000000;
  color: #000000;
  -webkit-transform: rotate(90deg);
  width: 600px;
  height: 2px;
  border: 4px;
}
</style>
