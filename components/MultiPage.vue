<script setup>
import { ref } from "vue";

const props = defineProps({
  Heads: Array,
  About: String,
  OtherServiceHeader: String,
  OtherServices: Array,
  ConvinceTitle: String,
  ConvinceText: String,
  ConvinceBtn: String,
});

const ImgSrc1 = ref("/image/eng-img.png");
const ImgSrc2 = ref("/image/procurement-img.png");
const ImgSrc3 = ref("/image/construction-img.png");
const ImgSrc4 = ref("/image/management-img.png");
</script>

<template>
  <div>
    <div class="bg-gray-200">
      <ul class="flex justify-between max-w-4xl py-8 mx-auto">
        <li class="font-bold text-xl" v-for="Head in Heads" :key="Head">{{ Head }}</li>
      </ul>
    </div>

    <div class="py-16 px-48">
      <p class="font-bold text-2xl">{{About}}</p>
    </div>

    <div class="container mx-auto flex flex-col gap-16">
      <div class="flex justify-between items-center">
        <div class="w-1/2">
          <NuxtImg
            :src="ImgSrc1"
            alt="eng-img"
            height="340"
            width="548"
          />
        </div>
        <div class="w-1/2">
          <h3 class="font-bold text-4xl text-sky-700">Engineering</h3>
          <p class="mt-4 w-10/12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
            maiores. Facere eum praesentium numquam debitis. Explicabo error
            dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum
            magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magni veniam nemo dolores delectus vero,
          </p>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="w-1/2">
          <h3 class="font-bold text-4xl text-sky-700">Procurement</h3>
          <p class="mt-4 w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            molestias alias dolore ipsa eaque nam voluptate veniam nemo tenetur
            quam asperiores ea, aut ratione repellat repudiandae vitae
            consectetur quod debitis? soluta distinctio minima debitis minus eum
            omnis suscipit adipisci architecto ipsa sapiente atque laboriosam ad
            magnam?
          </p>
        </div>
        <div class="w-1/2">
          <NuxtImg
            :src="ImgSrc2"
            alt="eng-img"
            height="340"
            width="548"
          />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="w-1/2">
          <NuxtImg
            :src="ImgSrc3"
            alt="eng-img"
            height="340"
            width="548"
          />
        </div>
        <div class="w-1/2">
          <h3 class="font-bold text-4xl text-sky-700">Construction</h3>
          <p class="mt-4 w-10/12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
            maiores. Facere eum praesentium numquam debitis. Explicabo error
            dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum
            magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magni veniam nemo dolores delectus vero,
          </p>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="w-1/2">
          <h3 class="font-bold text-4xl text-sky-700">Management</h3>
          <p class="mt-4 w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            molestias alias dolore ipsa eaque nam voluptate veniam nemo tenetur
            quam asperiores ea, aut ratione repellat repudiandae vitae
            consectetur quod debitis? soluta distinctio minima debitis minus eum
            omnis suscipit adipisci architecto ipsa sapiente atque laboriosam ad
            magnam?
          </p>
        </div>
        <div class="w-1/2">
          <NuxtImg
            :src="ImgSrc4"
            alt="eng-img"
            height="340"
            width="548"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-100 mt-16">
      <div class="container mx-auto py-16">
        <div class="text-center">
          <h2 class="font-bold text-4xl text-sky-700">{{OtherServiceHeader}}</h2>
        </div>

        <div class="flex justify-between gap-6 mt-8">
          <div  v-for="OtherService in OtherServices" :key="OtherService.title">
            <div class="bg-gray-200 rounded-xl p-8">
              <NuxtImg :src="OtherService.ImgSrc" alt="eng-img" height="48" width="48" />
              <h4 class="my-2 font-bold text-2xl">{{OtherService.title}}</h4>
              <p>{{OtherService.text}}</p>
            </div>
          </div>
        </div>       
      </div>
    </div>

    <div class="bg-blue-100">
      <div class="container mx-auto py-10 text-center">
        <h2 class="font-bold text-4xl">{{ConvinceTitle}}</h2>
        <p class="w-3/4 mx-auto my-6 text-xl">{{ConvinceText}}</p>
        <button class="py-2 px-4 text-white bg-blue-800 text-xl rounded-xl hover:bg-blue-300 transition-all">{{ConvinceBtn}}</button>
      </div>
    </div>
  </div>
</template>

<style>
</style>