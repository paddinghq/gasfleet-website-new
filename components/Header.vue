<script setup>
import { ref } from "vue";

const NuxtImgSrc1 = ref("/down.png");
const NuxtImgSrc2 = ref("/down.png");
const isDropdownOpen1 = ref(false);
const isDropdownOpen2 = ref(false);

const toggleDropdown1 = () => {
  isDropdownOpen1.value = !isDropdownOpen1.value;
  isDropdownOpen2.value = !isDropdownOpen2.value;
  NuxtImgSrc1.value = isDropdownOpen1.value ? "/down.png" : "/up.png";
};
const toggleDropdown2 = () => {
  isDropdownOpen1.value = !isDropdownOpen1.value;
  isDropdownOpen2.value = !isDropdownOpen2.value;
  NuxtImgSrc2.value = isDropdownOpen2.value ? "/down.png" : "/up.png";
};
</script>

<template>
  <div class="nav container mx-auto">
    <div>
      <NuxtLink to="/"><NuxtImg src="/colored.png" alt="logo" height="34" width="34" /></NuxtLink>
    </div>

    <header>
      <nav class="nav-links">
        <div class="relative">
          <button @click="toggleDropdown1" class="button">
            <NuxtLink class="sans text-lg transition-all hover:text-gray-500"
              >Who we are</NuxtLink
            >
            <NuxtImg
              :src="NuxtImgSrc1"
              alt="arrow"
              height="24"
              width="24"
            />
          </button>

          <transition name="fade">
            <div
              v-if="isDropdownOpen1"
              class="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg"
            >
              <ul class="py-1">
                <li @click="toggleDropdown1">
                  <NuxtLink
                    to="aboutus"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >About Us</NuxtLink
                  >
                </li>
                <li @click="toggleDropdown1">
                  <NuxtLink
                    to="ourteam"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Our Team</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <div class="relative">
          <button @click="toggleDropdown2" class="button">
            <NuxtLink class="sans text-lg transition-all hover:text-gray-500"
              >What we do</NuxtLink
            >
            <NuxtImg
              :src="NuxtImgSrc2"
              alt="arrow"
              height="24"
              width="24"
            />
          </button>

          <transition name="fade">
            <div
              v-if="isDropdownOpen2"
              class="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg"
            >
              <ul class="py-1">
                <li @click="toggleDropdown2">
                  <NuxtLink
                    to="ECPM"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >ECPM</NuxtLink
                  >
                </li>
                <li @click="toggleDropdown2">
                  <NuxtLink
                    to="GAS"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Gas Distribution</NuxtLink
                  >
                </li>
                <li @click="toggleDropdown2">
                  <NuxtLink
                    to="power"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Power Distribution</NuxtLink
                  >
                </li>
                <li @click="toggleDropdown2">
                  <NuxtLink
                    to="IDPM"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >IDPM</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <button class="button">
          <NuxtLink
            class="sans text-lg transition-all hover:text-gray-500"
            to="projects"
            >Projects</NuxtLink
          >
        </button>
        <button class="button">
          <NuxtLink
            class="sans text-lg transition-all hover:text-gray-500"
            to="sustainability"
            >Sustainability</NuxtLink
          >
        </button>
      </nav>
    </header>

    <div class="input-logo">
      <div class="input">
        <input
          class="input-tag focus-visible:ring-0 focus-visible:ring-offset-0"
        /><NuxtImg src="/search.png" width="24" height="24" />
      </div>
      <div class="logo">
        <NuxtLink
          ><NuxtImg src="/Facebook.png" alt="facebook" height="24" width="24"
        /></NuxtLink>
        <NuxtLink
          ><NuxtImg src="/Linkedin.png" alt="facebook" height="24" width="24"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.focus-visible\:ring-0:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
}

.focus-visible\:ring-offset-0:focus-visible {
  --tw-ring-offset-width: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  /* transition: opacity 0.3s ease; */
}

.input-tag {
  border: none;
  outline: none;
}

.logo {
  display: flex;
  gap: 2rem;
}

.input-logo {
  display: flex;
  gap: 2rem;
}

.button {
  background-color: white;
  border: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}

.nuxtlink {
  font-size: 16px;
}

.nav {
  padding: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.input {
  display: flex;
  align-items: center;
}
</style>
