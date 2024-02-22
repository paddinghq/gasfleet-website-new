<script setup>
import Management from '@/components/Management.vue'
import Engineering from '@/components/Engineering.vue'
import Admin from '@/components/Admin.vue'
import InformationTechnology from '@/components/InfoTech.vue'
import Contractors from '@/components/Contractors.vue'
import { ref, computed } from 'vue'

const activeTab = ref("management")

const activeComponent = computed(() => {
  switch (activeTab.value) {
    case 'engineering':
      return Engineering
    case 'admin':
      return Admin
    case 'it':
      return InformationTechnology
    case 'contractors':
      return Contractors
    default:
      return Management
  }
})

const activateTab = (tab) => {
  activeTab.value = tab
}
</script>

<template>
  <div>
    <div class="banner">
      <NuxtImg class="img" src="/hero.jpg" height="467px" />
      <NuxtImg class="rectangle" src="/rectangle.png"  width="157px" height="247px"/>
      <div class="hero-div">
        <h1>Our team</h1>
        <p>Our team members have worked on projects across the nation and are committed to delivering<br>the highest level of service and quality</p>
      </div>
      <div class="tabs">
        <button class="button" @click="activateTab('management')" :class="{ active: activeTab === 'management', focus: activeTab === 'management' }">Management</button>
        <button class="button" @click="activeTab = 'engineering'" :class="{ active: activeTab === 'engineering' }">Engineering</button>
        <button class="button" @click="activeTab = 'admin'" :class="{ active: activeTab === 'admin' }">Admin</button>
        <button class="button" @click="activeTab = 'it'" :class="{ active: activeTab === 'it' }">Information Technology</button>
        <button class="button" @click="activeTab = 'contractors'" :class="{ active: activeTab === 'contractors' }">Contractors</button>
      </div>
    </div>
    <component :is="activeComponent" />
    <div class="projects">
      <h2 class="convinced">Convinced yet? Check out projects we have done.</h2>
      <div class="convinced">
        <p>
          Unleash the potential of your projects with our pioneering oil and gas
          engineering solutions<br />Let's shape the future together. Talk to us
          about your next groundbreaking project
        </p>
      </div>
      <button class="project-button">Projects</button>
    </div>
  </div>
</template>

<style scoped>
.button.focus {
  color: #205fad;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 4px;
}
.button:focus {
  color: #205fad;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 4px;
}

.project-button {
  background-color: #205fad;
  padding: 0.8rem;
  border-radius: 0.7rem;
  color: white;
  border: none;
  margin-top: 0.3rem;
}

.projects {
  background-color: #eff6ff;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
}
.convinced {
  color: #333333;
}

.tabs {
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 0;
}

.button {
  color: #777777;
  border: none;
  font-size: 1.3rem;
  font-weight: 900;
}


.banner {
  background-color: #f1f1f1;
  position: relative;
}

.img {
  width: 100%;
  filter: brightness(25%);
  position: relative;
}

.rectangle {
  position: absolute;
  top: 43%;
  left: 10%;
  transform: translate(-50%, -50%);
}

.hero-div {
  color: white;
  position: absolute;
  top: 44%;
  left: 35%;
  transform: translate(-50%, -50%);
}

.hero-div h1{
  font-weight: 900;
  font-size: 3.3rem;
}

.hero-div p{
  margin-top: -2rem;
  font-size: 1.2rem;
}
</style>
