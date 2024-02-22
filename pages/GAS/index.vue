<script setup>
import { ref } from "vue";
import MultiPage from "../../components/MultiPage.vue";

// const ImgSrc = ref("/image/epm-image.png");

// const hero = ref({
//     img:ImgSrc, 
//     title: "ecpm",
//     text: "natural gas distribution"
// })

const Heads = [
  "Natural Gas Distribution",
  "Power Distribution",
  "Infrastructure Development",
];

const ImgSrc1 = ref("/image/eng-img.png");
const ImgSrc2 = ref("/image/procurement-img.png");
const ImgSrc3 = ref("/image/construction-img.png");
const ImgSrc4 = ref("/image/management-img.png");

const missions = ref([
  {
    id: 1,
    img: ImgSrc1,
    title: "Engineering",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,maiores. Facere eum praesentium numquam debitis. Explicabo error dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veniam nemo dolores delectus vero,",
  },
  {
    id: 2,
    img: ImgSrc2,
    title: "Procurement",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,maiores. Facere eum praesentium numquam debitis. Explicabo error dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veniam nemo dolores delectus vero,",
  },
  {
    id: 3,
    img: ImgSrc3,
    title: "Engineering",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,maiores. Facere eum praesentium numquam debitis. Explicabo error dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veniam nemo dolores delectus vero,",
  },
  {
    id: 4,
    img: ImgSrc4,
    title: "Procurement",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,maiores. Facere eum praesentium numquam debitis. Explicabo error dolores, ad vero earum modi ipsam nobis illum ea incidunt quae ipsum magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veniam nemo dolores delectus vero,",
  },
]);

const ImgSrc5 = ref("/image/gas.png");
const ImgSrc6 = ref("/image/power.png");
const ImgSrc7 = ref("/image/development.png");

const OtherServices = ref([
  {
    ImgSrc: ImgSrc5,
    title: "Natural Gas Distribution",
    text: "We deliver science, technology and engineering solutions to governments and companies around the world.",
  },
  {
    ImgSrc: ImgSrc6,
    title: "Power Distribution",
    text: "We deliver science, technology and engineering solutions to governments and companies around the world.",
  },
  {
    ImgSrc: ImgSrc7,
    title: "Infrastructure Development",
    text: "We deliver science, technology and engineering solutions to governments and companies around the world.",
  },
]);

const convince = {
  title: "Convinced yet? Check out Projects we have done.",
  text: "Unleash the potential of your projects with our pioneering oil and gas engineering solutions. Let's shape the future together. Talk to us about your next groundbreaking project.",
  btn: "Projects",
};
</script>

<template>
  <div class="relative bg-[#f1f1f1]">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[467px]"
        alt="epm-image"
        src="/image/epm-image.png"
      />
      <NuxtImg
        class="absolute top-[43%] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
        src="/rectangle.png"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[44%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-bold mt-5 text-5xl uppercase">natural gas distribution</h1>
        <p class="text-[1.2rem]">
          Given our strategic mandate of diversifying our business model towards becoming an integrated <br />
          value chain player, we are making significant in-roads into the natural gas value chain.
        </p>
      </div>
  </div>
  <MultiPage
    :Heads="Heads"
    About="We are currently pioneering the development of Nigeria's foremost private
            sector-led Natural Gas to Industrialbase mode. This we believe will set 
            us at the forefront of becoming one of the
            key player in Gas distribution in Nigeria."
    :MissionSection="missions"
    OtherServiceHeader="Other Services"
    :OtherServices="OtherServices"
    :ConvinceTitle="convince.title"
    :ConvinceText="convince.text"
    :ConvinceBtn="convince.btn"
  />
</template>