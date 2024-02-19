<template>
  <div class="management">
    <div v-for="(item, index) in mappedArray" :key="index" class="mapped">
      <img :src="item.img" :alt="item.alt" class="img-width" />
      <div class="text">
        <h2>{{ item.name }}</h2>
        <p>{{ item.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const myArray = ref([
  {
    img: "/ourteam1.png",
    name: "Sanyaolu Yetunde",
    position: "Executive Director",
    alt: "sanyaolu-yetunde",
  },
  {
    img: "/ourteam2.png",
    name: "Sanyaolu Olugbenga",
    position: "MD | Head of Operations",
    alt: "sanyaolu-olugbenga",
  },
  {
    img: "/ourteam3.png",
    name: "Sanyaolu Olufemi",
    position: "Head Engineering & Project",
    alt: "sanyaolu-olufemi",
  },
  {
    img: "/ourteam4.png",
    name: "Odubanjo Oluwadamilola",
    position: "Head Admin & HR",
    alt: "odubanjo-oluwadamilola",
  },
  {
    img: "/ourteam5.png",
    name: "Balogun Ibrahim",
    position: "Head QA/QC",
    alt: "balogun-ibrahim",
  },
  {
    img: "/ourteam6.png",
    name: "Samuel Ezekiel",
    position: "Head EHS",
    alt: "sanyaolu-yetunde",
  },
]);

const mappedArray = computed(() => {
  return myArray.value.map((item) => {
    return { ...item, name: item.name };
  });
});
</script>

<style lang="scss" scoped>
.text {
    text-align: center;
    padding-bottom: 1rem;
    padding-top: 0.5rem;

}

.management {
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3.5rem;
}

.img-width {
  width: 100%;
}

.mapped {
  background-color: #f1f1f1;
  border-radius: 1rem;
}
</style>
