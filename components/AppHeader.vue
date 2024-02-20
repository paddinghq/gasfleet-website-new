<script setup>
import { ref } from "vue";

const NuxtImgSrc1 = ref("/down.png");
const NuxtImgSrc2 = ref("/down.png");
const isDropdownOpen1 = ref(false);
const isDropdownOpen2 = ref(false);
const toggleDropdown1 = () => {
  isDropdownOpen1.value = !isDropdownOpen1.value;
  NuxtImgSrc1.value = isDropdownOpen1.value ? "/down.png" : "/up.png";
};
const toggleDropdown2 = () => {
  isDropdownOpen2.value = !isDropdownOpen2.value;
  NuxtImgSrc2.value = isDropdownOpen2.value ? "/down.png" : "/up.png";
};
</script>

<template>
  <div class="nav">
    <div><NuxtImg src="/colored.png" alt="logo" height="34" width="34" /></div>

    <header>
      <nav class="nav-links">
        <button class="button" @click="toggleDropdown1">
          <NuxtLink>Who we are</NuxtLink>
          <NuxtImg
            v-bind:src="NuxtImgSrc1"
            alt="arrow"
            height="24"
            width="24"
          />
        </button>
        <button class="button" @click="toggleDropdown2">
          <NuxtLink>What we do</NuxtLink>
          <NuxtImg
            v-bind:src="NuxtImgSrc2"
            alt="arrow"
            height="24"
            width="24"
          />
        </button>
        <button class="button"><NuxtLink class="">Projects</NuxtLink></button>
        <button class="button">
          <NuxtLink class="">Sustainability </NuxtLink>
        </button>
      </nav>
    </header>
    <div class="input-logo">
      <div class="input">
        <input class="input-tag focus-visible:ring-0 focus-visible:ring-offset-0" /><NuxtImg
          src="/search.png"
          width="24"
          height="24"
        />
      </div>
      <div class="logo">
        <NuxtLink
          ><NuxtImg src="Facebook.png" alt="facebook" height="24" width="24"
        /></NuxtLink>
        <NuxtLink
          ><NuxtImg src="Linkedin.png" alt="facebook" height="24" width="24"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  padding: 2rem 4rem;
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
