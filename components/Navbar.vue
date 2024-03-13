<script setup>
import { ref } from 'vue';
const menu = ref("menu-bar.png");

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <nav class="lg:hidden">
    <div class="flex justify-between items-center py-2.5 px-6">
      <div class="w-6 h-6 md:w-10">
        <NuxtLink to="/">
          <NuxtImg src="/colored.png" alt="logo" class="w-full h-full object-cover" />
        </NuxtLink>
      </div>
      <div class="flex justify-end items-center">
        <div class="flex justify-between gap-2">
          <div class="flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66683 14.5C3.90016 14.5 0.833496 11.4334 0.833496 7.66671C0.833496 3.90004 3.90016 0.833374 7.66683 0.833374C11.4335 0.833374 14.5002 3.90004 14.5002 7.66671C14.5002 11.4334 11.4335 14.5 7.66683 14.5ZM7.66683 1.83337C4.44683 1.83337 1.8335 4.45337 1.8335 7.66671C1.8335 10.88 4.44683 13.5 7.66683 13.5C10.8868 13.5 13.5002 10.88 13.5002 7.66671C13.5002 4.45337 10.8868 1.83337 7.66683 1.83337Z"
                fill="#0A0A0A"
              />
              <path
                d="M14.6666 15.1666C14.54 15.1666 14.4133 15.12 14.3133 15.02L12.98 13.6866C12.7866 13.4933 12.7866 13.1733 12.98 12.98C13.1733 12.7866 13.4933 12.7866 13.6866 12.98L15.02 14.3133C15.2133 14.5066 15.2133 14.8266 15.02 15.02C14.92 15.12 14.7933 15.1666 14.6666 15.1666Z"
                fill="#292D32"
              />
            </svg>
          </div>
          <button @click="toggleMobileMenu" class="text-gray-800 focus:outline-none">
            <NuxtImg src="../public/menu.png" alt="menu-bar" class="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white" :class="isMobileMenuOpen ? 'absolute w-screen h-screen z-10 opacity-100 transition-all duration-500' : 'absolute z-0 opacity-0 transition-all duration-500'">
      <div class="flex flex-col space-y-4">
        <a href="#" class="text-black">Home</a>
        <a href="#" class="text-black">About</a>
        <a href="#" class="text-black">Services</a>
        <a href="#" class="text-black">Contact</a>
      </div>
    </div>
  </nav>
</template>