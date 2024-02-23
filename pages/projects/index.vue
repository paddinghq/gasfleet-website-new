<script setup>
import All from "@/components/All.vue";
import Completed from "@/components/Completed.vue";
import Ongoing from "@/components/Ongoing.vue";
import { ref, computed } from "vue";

const activeTab = ref("management");

const activeComponent = computed(() => {
  switch (activeTab.value) {
    case "completed":
      return Completed;
    case "ongoing":
      return Ongoing;
    default:
      return All;
  }
});

const activateTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <div>
    <div class="relative bg-[#f1f1f1]">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[467px]"
        alt="ourteam-image"
        src="/hero.jpg"
      />
      <NuxtImg
        class="absolute top-[43%] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
        src="/rectangle.png"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[44%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-bold mt-5 text-5xl">Projects</h1>
        <p class="text-[1.2rem]">
          We are committed to providing our clients with comprehensive and innovative solutions to the <br /> complex challenges facing the oil and gas industry.
        </p>
      </div>
      
      <div class="flex gap-12 items-center justify-center pb-8 pt-6">
        <button
          class="button"
          @click="activateTab('all')"
          :class="{
            active: activeTab === 'all',
            focus: activeTab === 'all',
          }"
        >
          All Projects
        </button>
        <button
          class="button"
          @click="activeTab = 'completed'"
          :class="{ active: activeTab === 'completed' }"
        >
          Completed
        </button>
        <button
          class="button"
          @click="activeTab = 'ongoing'"
          :class="{ active: activeTab === 'ongoing' }"
        >
          Ongoing
        </button>
      </div>
    </div>
    <component :is="activeComponent" />

    <div class="flex justify-center my-5">

        <button class="py-2 px-4 text-black border-2 text-xl rounded-xl hover:bg-blue-300 transition-all cursor-pointer">Load More</button>
    </div>

    <div class="bg-blue-100 mt-5">
      <div class="container mx-auto py-10 text-center">
        <h2 class="font-bold text-4xl capitalize">Ready to revolutionize your projects? get in touch with us</h2>
        <p class="w-3/4 mx-auto my-6 text-xl">Unleash the potential of your projects with our pioneering oil and gas engineering solutions. Let's shape the future together. Talk to us about your next groundbreaking project.</p>
        <button class="py-2 px-4 text-white bg-blue-800 text-xl rounded-xl hover:bg-blue-300 transition-all">Contact us</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  color: #777777;
  border: none;
  font-size: 1.3rem;
  font-weight: 900;
}
.button:focus {
  color: #205fad;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 4px;
}

.button.focus {
  color: #205fad;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 4px;
}
</style>