<script setup>
import { ref } from "vue";
import MultiPage from "../../components/MultiPage.vue";

const ImgSrc1 = ref("/image/eng-img.png");
const ImgSrc2 = ref("/image/procurement-img.png");
const ImgSrc3 = ref("/image/construction-img.png");

const missions = ref([
  {
    id: 1,
    img: ImgSrc1,
    title: "EHS/QC",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,maiores. Facere eum praesentium numquam debitis. Explicabo error dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veniam nemo dolores delectus vero,",
  },
  {
    id: 2,
    img: ImgSrc2,
    title: "Our HSE Function",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,maiores. Facere eum praesentium numquam debitis. Explicabo error dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veniam nemo dolores delectus vero,",
  },
  {
    id: 3,
    img: ImgSrc3,
    title: "Our Social Responsibilty",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,maiores. Facere eum praesentium numquam debitis. Explicabo error dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veniam nemo dolores delectus vero,",
  },
]);

const shouldShowSection = ref(false);

const ImgSrc4 = ref("/image/epm-image.png");
const rectangleImg = ref("/rectangle.png");

const Heros = ref([
  {
    id: 6,
    img: ImgSrc4,
    rectangle: rectangleImg,
    title: "Sustainability",
    text: "Accessibility, affordability and availability of uninterrupted power supply is one of the biggest monster confronting Nigerians and Nigeria as a whole",
  },
]);
</script>

<template>
  <div>
    <MultiPage
      :Heros="Heros"
      About="Gasfleet in this regards is taking on the challenge of advancing incremental Power supplies as a  value added services to our customers through the provision embedded and captive power solutions to “stranded” customers"
      :MissionSection="missions"
      :showSection="shouldShowSection"
    />

    <NuxtImg
      class="w-full mt-8"
      alt="sustainability cta"
      src="/CTA.png"
    />
  </div>
</template>