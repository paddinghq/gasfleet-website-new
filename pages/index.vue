<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const items = ref([
  {
    image: '/image/hero-image.png',
    title: 'Gasfleet Engineering Limited - EPCM Company',
    text: 'We are committed to providing innovative solutions and exceptional service to our clients in the oil and gas industry. With decades of experience, our team of experts has a deep understanding of the industry and the challenges our clients face.',
  },
  {
    image: '/image/hero-image.png',
    title: 'Gasfleet Engineering Limited - EPCM Company',
    text: 'We are committed to providing innovative solutions and exceptional service to our clients in the oil and gas industry. With decades of experience, our team of experts has a deep understanding of the industry and the challenges our clients face.',
  },
  {
    image: '/image/hero-image.png',
    title: 'Gasfleet Engineering Limited - EPCM Company',
    text: 'We are committed to providing innovative solutions and exceptional service to our clients in the oil and gas industry. With decades of experience, our team of experts has a deep understanding of the industry and the challenges our clients face.',
  },
]);
const currentIndex = ref(0);
let autoSlideInterval = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(next, 4000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

const goTo = (index) => {
  currentIndex.value = index;
};

onMounted(startAutoSlide);
onBeforeUnmount(() => clearInterval(autoSlideInterval));
</script>

<style scoped>
.carousel-wrapper {
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 auto;
}

.dot {
  content: '';
  background: rgb(176, 176, 176);
}

.active {
  background: white;
  width: 2rem;
}
</style>

<template>
  <div>
    <div
      class="overflow-hidden h-[690px] relative"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div
        class="carousel-wrapper w-screen flex"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(item, index) in items" :key="index">
          <div class="carousel-item w-screen h-[684px]">
            <img
              :src="item.image"
              alt="Carousel Item"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="relative h-[690px] top-[-43rem] pl-16 flex items-center bg-gradient-to-r from-black/80 via-black/60 to-transparent"
          >
            <div class="text-white flex flex-col gap-5">
              <h1 class="w-[40%] text-6xl">{{ item.title }}</h1>
              <p class="text-lg w-[45%]">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-5 left-0 right-0 mb-8 flex justify-center">
        <div class="carousel-dots w-24 flex justify-between">
          <span
            v-for="(item, index) in items"
            :key="index"
            @click="goTo(index)"
            :class="{ active: currentIndex === index }"
            class="dot cursor-pointer h-2 w-4 rounded-2xl"
          ></span>
        </div>
      </div>
    </div>

    <div
      class="flex bg-white flex-col-reverse gap-10 2xl:flex-row lg:flex-row md:flex-col"
    >
      <img src="/image/services.png" alt="service" class="object-cover" />

      <div
        class="mt-1 py-10 px-3 2xl:px-20 2xl:py-10 2xl:mt-5 lg:py-10 lg:px-20 lg:mt-5 md:px-10 md:py-10 md:mt-3"
      >
        <h1
          class="text-[#205FAD] text-xl font-medium md:2xl lg:text-3xl 2xl:text-5xl"
        >
          Our Services
        </h1>

        <p
          class="text-base mt-2 md:text-base md:mt-3 lg:text-lg lg:mt-5 2xl:text-lg 2xl:mt-5"
        >
          We deliver science, technology and engineering solutions to government
          and companies around the world
        </p>

        <div
          class="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4 items-center mt-5"
        >
          <div class="bg-gray-100 p-5 rounded-lg">
            <img src="/image/epm.png" alt="emp" />
            <h2 class="uppercase font-bold text-xl my-3">epcm</h2>
            <p class="">
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>
          <div class="bg-gray-100 p-5 rounded-lg">
            <img src="/image/gas.png" alt="gas" />
            <h2 class="capitalize font-bold text-xl my-3">
              natural gas distribution
            </h2>
            <p>
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>

          <div class="bg-gray-100 p-5 rounded-lg">
            <img src="/image/power.png" alt="power" />
            <h2 class="capitalize font-bold text-xl my-3">
              Power distribution
            </h2>
            <p>
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>
          <div class="bg-gray-100 p-5 rounded-lg">
            <img src="/image/development.png" alt="development" />
            <h2 class="capitalize font-bold text-xl my-3">
              infrastructure development
            </h2>
            <p>
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 px-5 2xl:px-0 lg:px-0 md:px-0">
      <div
        class="2xl:px-[5rem] grid py-10 bg-gray-100 gap-10 2xl:grid-cols-2 lg:grid-cols-2 md:flex-col px-10"
      >
        <div
          class="bg-[#205FAD] rounded-lg flex gap-4 flex-col px-5 py-12 text-white w-94"
        >
          <h3 class="capitalize text-xl font-bold">Our Executed Projects</h3>
          <p class="text-justify">
            We pride ourseleves on our commitment to safety and quality. We have
            a proven track record of delivering projects that meet or exceed
            industry standard, while also minimizing environmental impact and
            promoting the well being of our employees and the communities in
            which we operate
          </p>
          <button
            class="bg-white text-[#205FAD] text-center rounded-lg p-2 w-36 cursor-pointer transition-all hover:bg-gray-200"
          >
            <NuxtLink to="projects">See all Projects</NuxtLink>
          </button>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between gap-10">
            <div class="flex flex-col gap-3">
              <img src="/image/project.png" alt="project" />
              <div class="">
                <p>Abuja gas fleet expansion</p>
                <span>2023</span>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="/image/project.png" alt="project" />
              <div class="text-base">
                <p>Abuja gas fleet expansion</p>
                <span>2023</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-5 items-center">
            <Icon
              name="material-symbols:arrow-circle-left-outline"
              color="black"
              size="32"
              class="cursor-pointer"
            />
            <Icon
              name="material-symbols:arrow-circle-right-outline"
              color="black"
              size="32"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="text-center bg-white my-16 mx-10 gap-10 p-5">
      <h2
        class="text-[#205FAD] text-xl font-medium md:2xl lg:text-3xl 2xl:text-5xl"
      >
        Our Client
      </h2>

      <div
        class="grid grid-cols-3 place-items-center justify-items-center gap-y-10 gap-x-5 items-center sm:grid sm:grid-cols-4 mt-10"
      >
        <img src="/image/alexa.png" alt="" />
        <img src="/image/gaslink.png" alt="" />
        <img src="/image/gns.png" alt="" />
        <img src="/image/powergas.png" alt="" />
        <img src="/image/tgnl.png" alt="" />
        <img src="/image/ccetc.png" alt="" />
        <img src="/image/greenville.png" alt="" />
        <img src="/image/chcg.png" alt="" />
      </div>
    </div>
  </div>
</template>
