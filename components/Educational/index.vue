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

    <div class="sm:flex sm:justify-center">
      <div class="divSatu flex sm:flex-col sm:flex-end gap-4 mb-4 sm:mb-0">
        <article>
          <img
            src="@/assets/images/unila.jpeg"
            alt="unila"
            class="object-fit cover w-[300px] rounded-2xl"
          />
        </article>
        <br />
        <article>
          <img
            src="@/assets/images/sma.jpeg"
            alt="sma"
            class="object-fit cover w-[300px] rounded-2xl"
          />
        </article>
        <br />
        <article>
          <img
            rounded="2xl"
            src="@/assets/images/smp.jpg"
            alt="unila"
            class="object-fit cover w-[300px] rounded-2xl"
          />
        </article>
      </div>
      <!-- <hr class="vertical text-black rotate-90 w-[600px] h-[2px] border-[4px] ml-8 mt-[18rem]" /> -->
      <div class="divDua sm:flex sm:flex-start flex-col gap-4">
        <article
          class="py-4 px-4 shadow-md rounded border-t-[6px] border-blue-900 md:border-none"
        >
          <h2 class="font-bold text-[13px] sm:text-xl text-center py-4">
            University of Lampung
          </h2>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">
            Informatics Engineering
          </p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">IPK 3.88</p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">
            2020 - Now
          </p>
        </article>
        <br />
        <article
          class="py-4 px-4 shadow-md rounded border-t-[6px] border-blue-900 md:border-none"
        >
          <h2 class="font-bold text-[13px] sm:text-xl text-center py-4">
            YP Unila Senior High School
          </h2>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">
            Matematics and Natural Science
          </p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">
            Average Report (88/100)
          </p>
          <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">
            2017 - 2020
          </p>
        </article>
        <br />
        <article
          class="py-4 px-4 shadow-md rounded border-t-[6px] border-blue-900 md:border-none"
        >
          <h2 class="font-bold text-[13px] sm:text-xl text-center py-4">
            Junior High School 2 Penawartama
          </h2>
          <p class="text-[10px] sm:text-[18px] sm:font-medium">
            Natural Science
          </p>
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
/* hr.vertical {
  background-color: #000000;
  color: #000000;
  width: 600px;
  height: 2px;
  border: 4px;
} */
</style>
