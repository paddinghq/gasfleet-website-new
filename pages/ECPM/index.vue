<script setup>
import { ref } from "vue";
import MultiPage from "../../components/MultiPage.vue";

const Heads = [
  "Natural Gas Distribution",
  "Power Distribution",
  "Infrastructure Development",
];

// const ImgSrc1 = ref("/image/eng-img.png");
// const ImgSrc2 = ref("/image/procurement-img.png");
// const ImgSrc3 = ref("/image/construction-img.png");
// const ImgSrc4 = ref("/image/management-img.png");
const ImgSrc5 = ref("/image/gas.png");
const ImgSrc6 = ref("/image/power.png");
const ImgSrc7 = ref("/image/development.png");

const OtherServices = ref([
  {ImgSrc: ImgSrc5, title: 'Natural Gas Distribution', text: 'We deliver science, technology and engineering solutions to governments and companies around the world.'},
  {ImgSrc: ImgSrc6, title: 'Power Distribution', text: 'We deliver science, technology and engineering solutions to governments and companies around the world.'},
  {ImgSrc: ImgSrc7, title: 'Infrastructure Development', text: 'We deliver science, technology and engineering solutions to governments and companies around the world.'},
]);

const convince = {
  title: 'Convinced yet? Check out Projects we have done.',
  text: "Unleash the potential of your projects with our pioneering oil and gas engineering solutions. Let's shape the future together. Talk to us about your next groundbreaking project.",
  btn: 'Projects'
}
</script>

<template>
  <MultiPage
    :Heads="Heads"
    About="We are committed to providing innovative solutions and exceptional
        service to our clients in the oil and gas industry. With decades of
        experience, our team of experts has a deep understanding of the industry
        and the challenges our clients face. We work closely with our clients to
        develop customized solutions that meet their unique needs and goals."
    OtherServiceHeader="Other Services"
    :OtherServices="OtherServices"
    :ConvinceTitle="convince.title"
    :ConvinceText="convince.text"
    :ConvinceBtn="convince.btn"
  />
</template>

<style>
</style>