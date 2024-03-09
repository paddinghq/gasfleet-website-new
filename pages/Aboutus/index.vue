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

    <div class="py-16 container mx-auto flex gap-[88px]">
      <div class="relative w-[424px]">
        <NuxtImg class="w-full h-full" alt="rectangle" src="/history.png" />
      </div>
      <div class="w-1/2 self-center">
        <h1 class="text-[#205FAD] font-semibold text-2xl">Our History</h1>
        <p class="text-[#0A0A0A] mt-6">
          Gasfleet is a premier Engineering, Procurement and Construction<br />
          management company founded 2016. We provide detailed engineering and
          <br />
          technical service for our numerous customer across west Africa. We
          boast our<br />
          presence in the emerging markets and has successfully created a brand
          while<br />winning the steadfast trust and accolades from clients.
        </p>
      </div>
    </div>

    <div>
      <NuxtImg class="w-full" src="/aboutus.png" aria-multiline="aboutus" />
    </div>

    <div class="py-16 container mx-auto">
      <div class="flex justify-center gap-5">
        <NuxtImg
          class="w-[30rem] h-[0.35rem] self-center"
          src="/Rectangle3.png"
          alt="line"
        />
        <h2 class="text-3xl text-[#205FAD] font-regular">
          Gasfleet Engineering
        </h2>
        <NuxtImg
          class="w-[30rem] h-[0.35rem] self-center"
          src="/Rectangle4.png"
          alt="line"
        />
      </div>
      <p class="text-center text-[#0A0A0A] text-lg mt-7">
        Providing sustainable Gas & Power solution with innovation and service
        excellence
      </p>

      <div class="flex gap-[10rem] mt-20">
        <div class="flex gap-[10rem] mt-20">
          <div class="w-1/2 relative h-[28rem]">
            <NuxtImg src="/Rectangle6.png" class="w-[30rem]" />
            <NuxtImg
              src="/Frame2.png"
              class="w-[41rem] h-[25rem] absolute top-4 left-4"
            />
          </div>
          <div class="self-center">
            <h1 class="text-[#205FAD] font-bold text-[40px]">Our Mission</h1>
            <p class="text-[#0A0A0A] mt-5 tracking-wide">
              To provide world class EPCM services delivery to our<br />
              valued client in a manner that is consistent with our core<br />
              values and best safety practices.
            </p>
          </div>
        </div>

        <div class="relative flex gap-[10rem] my-20">
          <div class="self-center">
            <h1 class="text-[#205FAD] font-bold text-4xl">Our Vision</h1>
            <p class="text-[#0A0A0A] mt-5 tracking-wide">
              To become a world-class oil and gas servicing firm known<br />
              for its superior service delivery in engineering,<br />
              procurement, construction, and management (EPCM) and<br />
              its capabilities in both the upstream and downstream<br />
              sectors of the industry.
            </p>
          </div>
          <div class="w-1/2 h-[28rem]">
            <NuxtImg src="/Rectangle5.png" class="w-[30rem] absolute right-0" />
            <NuxtImg
              src="/Frame4.png"
              class="w-[41rem] h-[25rem] absolute top-4 right-4"
            />
          </div>
        </div>

        <div class="flex gap-[10rem]">
          <div class="w-1/2 relative h-[28rem]">
            <NuxtImg src="/Rectangle6.png" class="w-[30rem]" />
            <NuxtImg
              src="/Frame3.png"
              class="w-[41rem] h-[25rem] absolute top-4 left-4"
            />
          </div>
          <div class="self-center">
            <h1 class="text-[#205FAD] font-bold text-4xl">Our Core Values</h1>
            <p class="text-[#0A0A0A] mt-5 tracking-wide">
              Making an effort to contribute by communicating openly<br />
              and honestly with clients, finding innovative solutions for<br />
              them, and ensuring that everyone on the team is on the<br />
              same page.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-[#F1F1F1] py-16 px-20">
        <h1 class="text-center text-[#205FAD] font-bold text-4xl">
          Our Clients
        </h1>
        <div class="">
          <div class="flex justify-between mt-12">
            <NuxtImg class="w-24" src="/image/alexa.png" alt="alexa" />
            <NuxtImg class="w-24" src="/image/gaslink.png" alt="gaslink" />
            <NuxtImg class="w-24" src="/image/gns.png" alt="gns" />
            <NuxtImg class="w-24" src="/image/powergas.png" alt="powergas" />
          </div>
          <div class="flex justify-between mt-12">
            <NuxtImg class="w-24" src="/image/tgnl.png" alt="tgnl" />
            <NuxtImg class="w-24" src="/image/ccetc.png" alt="ccetc" />
            <NuxtImg
              class="w-24"
              src="/image/greenville.png"
              alt="greenville"
            />
            <NuxtImg class="w-24" src="/image/chcg.png" alt="chcg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
