<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { projects } from "../store/projects";

const items = ref([
  {
    image: "/image/hero-image.png",
    title: "Gasfleet Engineering <br /> Limited - EPCM Company",
    text: "We are committed to providing innovative solutions and exceptional service to our clients in the oil and gas industry. With decades of experience, our team of experts has a deep understanding of the industry and the challenges our clients face.",
  },
  {
    image: "/image/hero-image.png",
    title: "Gasfleet Engineering <br /> Limited - EPCM Company",
    text: "We are committed to providing innovative solutions and exceptional service to our clients in the oil and gas industry. With decades of experience, our team of experts has a deep understanding of the industry and the challenges our clients face.",
  },
  {
    image: "/image/hero-image.png",
    title: "Gasfleet Engineering <br /> Limited - EPCM Company",
    text: "We are committed to providing innovative solutions and exceptional service to our clients in the oil and gas industry. With decades of experience, our team of experts has a deep understanding of the industry and the challenges our clients face.",
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

const projectIndex = ref(0);

const nextProject = () => {
  projectIndex.value = (projectIndex.value + 1) % projects.length;
};

const prevProject = () => {
  projectIndex.value = (projectIndex.value - 1 + projects.length) % projects.length;
};
</script>

<style scoped>
.carousel-wrapper {
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item:last-child {
  margin-right: 0;
}

@media screen and (min-width: 768px) {
  .carousel-item {
    margin-right: 1rem;
    flex: 0 0 calc(50% - 1rem); /* Display two items on tablets */
  }
}

.carousel-container {
  position: relative;
  overflow: hidden;
}

.dot {
  content: "";
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
      class="overflow-hidden h-screen relative lg:h-screen xl:h-screen"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div
        class="carousel-wrapper w-screen flex"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(item, index) in items" :key="index">
          <div
            class="carousel-item !mr-0 w-screen h-screen lg:h-screen xl:h-screen"
          >
            <img
              :src="item.image"
              alt="Carousel Item"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="relative h-screen top-[-37rem] px-6 flex items-center bg-gradient-to-r from-black/80 via-black/60 to-transparent md:px-10 lg:h-screen lg:top-[-49rem] xl:h-screen xl:top-[-61.5rem]"
          >
            <div class="text-white flex flex-col container mx-auto gap-5">
              <h1
                class="w-full text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
                v-html="item.title"
              ></h1>
              <p class="lg:text-lg lg:w-[45%]">{{ item.text }}</p>
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
        class="flex bg-white flex-col-reverse xl:flex-row 2xl:container 2xl:mx-auto"
      >
      <div class="object-cover md:h-[400px] xl:w-[733px] xl:h-full">
        <img
          src="/ourservice.png"
          alt="service"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="py-12 px-6 lg:px-10 xl:p-20">
        <h1 class="text-[#205FAD] text-xl font-semibold md:2xl lg:text-4xl">
          Our Services
        </h1>

        <p class="my-6 lg:text-lg">
          We deliver science, technology and engineering solutions to government
          and companies around the world
        </p>

        <div class="grid gap-6 items-center md:grid-cols-1 lg:grid-cols-2">
          <NuxtLink
            to="/epcm"
            class="bg-gray-100 p-5 rounded-lg hover:bg-gray-200 transition-all"
          >
            <img src="/image/epm.png" alt="emp" />
            <h2 class="uppercase font-semibold text-xl my-2">epcm</h2>
            <p class="">
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/gas"
            class="bg-gray-100 p-5 rounded-lg hover:bg-gray-200 transition-all"
          >
            <img src="/image/gas.png" alt="gas" />
            <h2 class="capitalize font-bold text-xl my-3">
              natural gas distribution
            </h2>
            <p>
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </NuxtLink>

          <NuxtLink
            to="power"
            class="bg-gray-100 p-5 rounded-lg hover:bg-gray-200 transition-all"
          >
            <img src="/image/power.png" alt="power" />
            <h2 class="capitalize font-bold text-xl my-3">
              Power distribution
            </h2>
            <p>
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/IDOM"
            class="bg-gray-100 p-5 rounded-lg hover:bg-gray-200 transition-all"
          >
            <img src="/image/development.png" alt="development" />
            <h2 class="capitalize font-bold text-xl my-3">
              infrastructure development
            </h2>
            <p>
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="bg-gray-100 py-12 px-6 lg:pr-0 xl:px-0"
    >
      <div class="container mx-auto flex flex-col justify-center gap-6 lg:flex-row xl:justify-between">
        <div
          class="bg-[#205FAD] rounded-lg flex gap-4 flex-col py-6 px-3 text-white items-center lg:w-[30%] lg:gap-6 lg:py-12 lg:px-6 lg:items-start"
        >
          <h3 class="capitalize text-2xl font-semibold">
            Our Executed Projects
          </h3>
          <p class="text-justify text-sm lg:text-base">
            We pride ourseleves on our commitment to safety and quality. We have
            a proven track record of delivering projects that meet or exceed
            industry standard, while also minimizing environmental impact and
            promoting the well being of our employees and the communities in
            which we operate
          </p>
          <button
            class="bg-white text-[#205FAD] text-center rounded-lg py-3 px-4 cursor-pointer transition-all hover:bg-gray-200"
          >
            <NuxtLink to="projects">See all Projects</NuxtLink>
          </button>
        </div>
        <div class="flex flex-col lg:w-[65%]">
          <div class="carousel-container">
            <div class="carousel-wrapper flex md:hidden"  :style="{ transform: `translateX(-${projectIndex * 100}%)` }">
              <div v-for="(project) in projects" :key="project.id" class="carousel-item">
                <NuxtLink :to="`/projects/${project.id}`" class="w-full flex flex-col gap-3">
                  <div class="rounded-xl relative h-[270px]">
                    <NuxtImg
                      class="h-full w-full filter brightness-[0.9] relative object-cover rounded-xl"
                      :src="project.NuxtImg"
                      :alt="project.alt"
                    />
                    <p
                      class="absolute left-[20px] top-[20px] text-white p-1 rounded-lg"
                      :class="
                        project.status === 'ONGOING' ? 'bg-yellow-700' : 'bg-green-800'
                      "
                    >
                      {{ project.status }}
                    </p>
                  </div>
                  <div class="flex justify-between font-semibold lg:flex-col">
                    <p>{{ project.name }} <span>{{ project.id }}</span></p> 
                    <span>{{ project.year }}</span>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <div class="carousel-wrapper hidden md:flex"  :style="{ transform: `translateX(-${projectIndex/2 * 100}%)` }">
              <div v-for="(project) in projects" :key="project.id" class="carousel-item">
                <NuxtLink :to="`/projects/${project.id}`" class="w-full flex flex-col gap-3">
                  <div class="rounded-xl relative h-[270px] xl:w-[400px]">
                    <NuxtImg
                      class="h-full w-full filter brightness-[0.9] relative object-cover rounded-xl"
                      :src="project.NuxtImg"
                      :alt="project.alt"
                    />
                    <p
                      class="absolute left-[20px] top-[20px] text-white p-1 rounded-lg"
                      :class="
                        project.status === 'ONGOING' ? 'bg-yellow-700' : 'bg-green-800'
                      "
                    >
                      {{ project.status }}
                    </p>
                  </div>
                  <div class="flex justify-between font-semibold lg:flex-col">
                    <p>{{ project.name }} <span>{{ project.id }}</span></p> 
                    <span>{{ project.year }}</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
              
            <div class="flex justify-between mt-2 items-center">
              <Icon
                name="material-symbols:arrow-circle-left-outline"
                color="black"
                size="32"
                class="cursor-pointer"
                @click="prevProject"
              />
              <Icon
                name="material-symbols:arrow-circle-right-outline"
                color="black"
                size="32"
                class="cursor-pointer"
                @click="nextProject"
              />
            </div>
          </div>
          <!-- <div class="flex justify-between gap-6">
            <div class="flex flex-col gap-3">
              <div class="rounded-xl relative h-[270px] xl:w-[358px]">
                <NuxtImg
                  class="h-full w-full filter brightness-[0.9] relative object-cover rounded-xl"
                  src="project.jpeg"
                  alt="rectangle"
                />
                <p
                  class="absolute left-[20px] top-[20px] text-white bg-yellow-700 p-1 rounded-lg"
                >
                  ONGOING
                </p>
              </div>
              <div class="flex justify-between font-semibold lg:flex-col">
                <p>Abuja Gas Plant Expansion</p>
                <span>2023</span>
              </div>
            </div>
            <div class="hidden flex-col gap-3 md:flex">
              <div class="rounded-xl relative h-[270px] xl:w-[358px]">
                <NuxtImg
                  class="h-full w-full filter brightness-[0.9] relative object-cover rounded-xl"
                  src="project.jpeg"
                  alt="rectangle"
                />
                <p
                  class="absolute left-[20px] top-[20px] text-white bg-yellow-700 p-1 rounded-lg"
                >
                  ONGOING
                </p>
              </div>
              <div class="flex justify-between font-semibold lg:flex-col">
                <p>Abuja Gas Plant Expansion</p>
                <span>2023</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-2 items-center">
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
          </div> -->
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
