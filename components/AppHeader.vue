<script setup>
import { ref } from "vue";

const NuxtImgSrc = ref("/down.png");
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  NuxtImgSrc.value = isDropdownOpen.value ? "/down.png" : "/up.png";
};
</script>

<template>
  <div class="nav">
    <div><NuxtImg src="/colored.png" alt="logo" height="34" width="34" /></div>

    <header>
      <nav class="nav-links">
        <button class="button" @click="toggleDropdown">
          <NuxtLink>Who we are</NuxtLink>
          <NuxtImg v-bind:src="NuxtImgSrc" alt="arrow" height="24" width="24" />
        </button>
        <button class="button">
          <NuxtLink>What we do</NuxtLink>
          <NuxtImg v-bind:src="NuxtImgSrc" alt="arrow" height="24" width="24" />
        </button>
        <button class="button"><NuxtLink class="">Projects</NuxtLink></button>
        <button class="button">
          <NuxtLink class="">Sustainability </NuxtLink>
        </button>
      </nav>
    </header>
    <div class="input-logo">
      <div class="input">
        <input class="input-tag" /><NuxtImg
          src="/search.png"
          width="24"
          height="24"
        />
      </div>
      <div class="logo">
        <NuxtLink
          ><NuxtImg src="Facebook.png" alt="facebook" height="24" width="24"
        /></NuxtLink>
        <NuxtLink><NuxtImg src="Linkedin.png" alt="facebook" height="24" width="24"/></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-tag {
  border: none;
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
