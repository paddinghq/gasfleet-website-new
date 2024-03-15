<script setup>
const rectangleImg = ref("rectangle.png");
const ImgSrc = ref("hero.jpg");

const Heros = ref([
  {
    id: 7,
    img: ImgSrc,
    rectangle: rectangleImg,
    title: "About Us",
    text: "We are committed to providing our clients with comprehensive and innovative solutions to the complex challenges facing the oil and gas industry.",
  },
]);
</script>

<template>
  <div class="">
    <Hero :Heros="Heros" />

    <div
      class="py-8 px-6 container mx-auto flex flex-col-reverse gap-8 md:py-10 md:flex-row lg:gap-12 lg:py-16 xl:gap-[88px]"
    >
      <div class="relative md:w-1/2">
        <NuxtImg class="w-full h-full" alt="rectangle" src="/history.png" />
      </div>
      <div class="w-full self-center md:w-1/2">
        <h1 class="text-[#205FAD] font-semibold text-2xl lg:text-4xl">
          Our History
        </h1>
        <p class="text-[#0A0A0A] font-normal mt-6">
          Gasfleet Engineering Limited is an African Company established since
          2016.
        </p>
      </div>
    </div>

    <div>
      <NuxtImg class="w-full" src="/aboutus.png" aria-multiline="aboutus" />
    </div>

    <div class="container mx-auto pt-8 lg:pt-16">
      <div class="flex justify-between gap-5">
        <NuxtImg
          class="w-24 h-[0.35rem] self-center md:w-[19rem] lg:w-96"
          src="/Rectangle3.png"
          alt="line"
        />
        <h2 class="text-xl text-[#205FAD] font-medium lg:text-[32px]">
          Gasfleet Engineering
        </h2>
        <NuxtImg
          class="w-[6rem] h-[0.35rem] self-center md:w-[19rem] lg:w-96"
          src="/Rectangle4.png"
          alt="line"
        />
      </div>
      <p class="text-center px-6 text-[#0A0A0A] text-xs my-2 md:text-lg">
        Providing sustainable Gas & Power solution with innovation and service
        excellence
      </p>
    </div>

    <div
      class="container mx-auto py-12 px-6 lg:pt-20 lg:pb-16 lg:px-10 xl:px-0"
    >
      <div
        class="flex flex-col-reverse justify-between gap-8 md:items-center lg:flex-row lg:gap-10 xl:gap-28"
      >
        <div class="md:p-0 md:w-1/2 lg:h-[350px]">
          <NuxtImg
            class="w-full h-full lg:hidden"
            src="/our-mission.png"
            alt="line"
          />
          <NuxtImg
            class="w-full h-full hidden lg:block"
            src="/bg-mission.png"
            alt="line"
          />
        </div>
        <div class="self-center">
          <h1
            class="text-[#205FAD] font-semibold text-2xl lg:text-4xl xl:font-bold"
          >
            Our Mission
          </h1>
          <p class="text-[#0A0A0A] mt-4">
            We are committed to delivering services of <br />
            the highest calibre, driven by excellence <br />
            and in perfect harmony with our core <br />
            values and stringent safety protocols
            <!-- To provide world class EPCM services delivery to our<br
              class="hidden md:block"
            />
            valued client in a manner that is consistent with our core<br
              class="hidden md:block"
            />
            values and best safety practices. -->
          </p>
        </div>
      </div>

      <div
        class="flex flex-col justify-between gap-8 my-8 md:items-center md:my-12 lg:my-20 lg:gap-10 lg:flex-row xl:gap-28"
      >
        <div class="self-center">
          <h1
            class="text-[#205FAD] font-semibold text-2xl lg:text-4xl xl:font-bold"
          >
            Our Vision
          </h1>
          <p class="text-[#0A0A0A] mt-5 text-md sm:text-sm">
            To become a global oil and gas servicing <br class="xl:hidden" />
            company with a <br class="hidden xl:block" />
            diversified portfolio <br class="xl:hidden" />
            through excellent service delivery.
          </p>
        </div>
        <div class="md:p-0 md:w-1/2 lg:h-[350px]">
          <NuxtImg
            class="w-full h-full lg:hidden"
            src="/our-vision.png"
            alt="line"
          />
          <NuxtImg
            class="w-full h-full hidden lg:block"
            src="/bg-vision.png"
            alt="line"
          />
        </div>
      </div>

      <div
        class="flex flex-col-reverse justify-between gap-8 md:items-center lg:flex-row lg:gap-10 xl:gap-28"
      >
        <div class="md:p-0 md:w-1/2 lg:h-[350px]">
          <NuxtImg
            class="w-full h-full lg:hidden"
            src="/our-corevalues.png"
            alt="line"
          />
          <NuxtImg
            class="w-full h-full hidden lg:block"
            src="/bg-corevalues.png"
            alt="line"
          />
        </div>
        <div class="self-center">
          <h1
            class="text-[#205FAD] font-semibold text-2xl lg:text-4xl xl:font-bold"
          >
            Our Core Values
          </h1>
          <p class="text-[#0A0A0A] mt-5 sm:text-sm">
            Making an effort to contribute by
            <br class="xl:hidden" />communicating openly
            <br class="hidden xl:block" />
            and honestly with <br class="xl:hidden" />
            clients, finding innovative solutions for<br />
            them, and ensuring that everyone on the <br class="xl:hidden" />
            team is on the <br class="hidden xl:block" />
            same page.
          </p>
        </div>
      </div>
    </div>

    <div class="text-center bg-gray-200 py-12 px-6 lg:px-10 xl:py-16 xl:px-0">
      <div class="container mx-auto">
        <h2 class="text-[#205FAD] text-2xl font-semibold lg:text-4xl">
          Our Client
        </h2>

        <div
          class="grid grid-cols-3 place-items-center justify-items-center gap-y-10 gap-x-5 items-center mt-12 lg:grid-cols-4"
        >
          <img src="/image/alexa.png" alt="" />
          <img src="/image/gaslink.png" alt="" />
          <img src="/image/gns.png" alt="" />
          <img src="/image/powergas.png" alt="" />
          <img src="/image/tgnl.png" alt="" />
          <img src="/image/ccetc.png" alt="" />
          <img src="/image/greenville.png" alt="" />
          <img src="/image/chcg.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
