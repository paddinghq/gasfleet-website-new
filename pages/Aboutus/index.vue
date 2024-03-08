<template>
  <div class="">
    <div class="relative bg-[#f1f1f1]">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[467px]"
        alt="oaboutus-image"
        src="/hero.jpg"
      />
      <NuxtImg
        class="absolute top-[50%] sm:top-[50%] left-20 sm:left-36 transform -translate-x-1/2 -translate-y-1/2 w-[90px] sm:w-[157px] h-[200px] sm:h-[247px]"
        src="/rectangle.png"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[48%] left-[50%] sm:top-[48%] sm:left-[34%] transform -translate-x-1/2 -translate-y-1/2 w-[250px]"
      >
        <h1 class="font-semibold text-[2rem] mt-5 sm:text-[4rem]">About Us</h1>
        <p class="text-sm sm:text-[1rem] font-semibold">
          We are committed to providing our clients with comprehensive and
          innovative solutions to the<br />complex challenges facing the oil and
          gas industry
        </p>
      </div>
    </div>
    <div class="p-10 sm:p-16 flex flex-col-reverse sm:flex-row gap-16">
      <div class="w-full sm:w-1/2 relative sm:h-[28rem] h-[18rem]">
        <NuxtImg class="sm:w-[20rem]" alt="rectangle" src="/Rectangle1.png" />
        <NuxtImg
          class="w-[290px] h-[250px] sm:w-[38rem] sm:h-[25rem] absolute top-3 sm:top-6 left-3 sm:left-6"
          alt="frame"
          src="/Frame1.png"
        />
        <NuxtImg
          class="absolute sm:w-[20rem] right-1 sm:right-2 bottom-1 sm:bottom-0"
          alt="rectangle"
          src="/Rectangle2.png"
        />
      </div>
      <div class="w-full sm:w-1/2 self-center">
        <h1 class="text-[#205FAD] font-semibold text-[2.5rem]">Our History</h1>
        <p class="text-[#0A0A0A] font-normal text-[1rem] mt-6">
          Gasfleet is a premier Engineering, Procurement and Construction<br
            class="hidden sm:block"
          />
          management company founded 2016. We provide detailed engineering and
          <br class="hidden sm:block" />
          technical service for our numerous customer across west Africa. We
          boast our<br class="hidden sm:block" />
          presence in the emerging markets and has successfully created a brand
          while<br class="hidden sm:block" />winning the steadfast trust and
          accolades from clients.
        </p>
      </div>
    </div>
    <div>
      <NuxtImg class="w-full" src="/aboutus.png" aria-multiline="aboutus" />
    </div>
    <div class="py-9 px-5 sm:py-16 sm:px-20">
      <div class="flex justify-center gap-5">
        <NuxtImg
          class="w-[4rem] sm:w-[30rem] h-[0.35rem] self-center"
          src="/Rectangle3.png"
          alt="line"
        />
        <h2 class="text-xl sm:text-4xl text-[#205FAD] font-bold">
          Gasfleet Engineering
        </h2>
        <NuxtImg
          class="w-[4rem] sm:w-[30rem] h-[0.35rem] self-center"
          src="/Rectangle4.png"
          alt="line"
        />
      </div>
      <p class="text-center text-[#0A0A0A] text-sm sm:text-lg mt-3 sm:mt-7">
        Providing sustainable Gas & Power solution with innovation and service
        excellence
      </p>

      <div
        class="flex flex-col-reverse sm:flex-row gap-10 sm:gap-[10rem] mb-10 sm:mb-0 mt-10 sm:mt-20"
      >
        <div
          class="p-2 sm:p-0 w-full sm:w-1/2 relative h-[17.5rem] sm:h-[28rem]"
        >
          <NuxtImg src="/Rectangle6.png" class="sm:w-[30rem] hidden sm:block" />
          <NuxtImg
            class="sm:w-[20rem] sm:hidden left-0"
            alt="rectangle"
            src="/Rectangle1.png"
          />
          <NuxtImg
            src="/Frame2.png"
            class="sm:w-[41rem] sm:h-[25rem] w-[310px] h-[245px] absolute top-5 left-5 sm:top-4 sm:left-4"
          />
          <NuxtImg
            class="absolute sm:hidden sm:w-[20rem] right-3 sm:right-2 bottom-1 sm:bottom-0"
            alt="rectangle"
            src="/Rectangle2.png"
          />
        </div>
        <div class="self-center">
          <h1 class="text-[#205FAD] font-bold text-[1.7rem] sm:text-[2.5rem]">
            Our Mission
          </h1>
          <p class="text-[#0A0A0A] mt-5 tracking-wide text-md sm:text-sm">
            To provide world class EPCM services delivery to our<br
              class="hidden sm:block"
            />
            valued client in a manner that is consistent with our core<br
              class="hidden sm:block"
            />
            values and best safety practices.
          </p>
        </div>
      </div>

      <div
        class="relative flex flex-col sm:flex-row gap-8 sm:gap-[10rem] mt-12"
      >
        <div class="self-center">
          <h1 class="text-[#205FAD] font-bold text-2xl sm:text-[2.5rem]">
            Our Vision
          </h1>
          <p class="text-[#0A0A0A] mt-5 tracking-wide text-md sm:text-sm">
            To become a world-class oil and gas servicing firm known<br
              class="hidden sm:block"
            />
            for its superior service delivery in engineering,<br
              class="hidden sm:block"
            />
            procurement, construction, and management (EPCM) and<br
              class="hidden sm:block"
            />
            its capabilities in both the upstream and downstream<br
              class="hidden sm:block"
            />
            sectors of the industry.
          </p>
        </div>
        <div class="w-full h-[17rem] sm:w-1/2 sm:h-[28rem]">
          <NuxtImg
            src="/Rectangle5.png"
            class="w-[30rem] sm:absolute right-0 hidden sm:block"
          />
          <NuxtImg
            class="sm:w-[20rem] sm:hidden left-0"
            alt="rectangle"
            src="/Rectangle1.png"
          />
          <NuxtImg
            src="/Frame4.png"
            class="sm:w-[41rem] sm:h-[25rem] absolute w-[310px] h-[245px] top-60 right-7 sm:top-4 sm:right-4"
          />
          <NuxtImg
            class="absolute sm:hidden sm:w-[20rem] right-3 sm:right-2 bottom-1 sm:bottom-0"
            alt="rectangle"
            src="/Rectangle2.png"
          />
        </div>
      </div>

      <div
        class="flex flex-col-reverse sm:flex-row gap-10 sm:gap-[10rem] mt-12"
      >
        <div class="w-full sm:w-1/2 relative h-[18rem] sm:h-[28rem]">
          <NuxtImg src="/Rectangle6.png" class="sm:w-[30rem] hidden sm:block" />
          <NuxtImg
            class="sm:w-[20rem] sm:hidden left-0"
            alt="rectangle"
            src="/Rectangle1.png"
          />
          <NuxtImg
            src="/Frame3.png"
            class="sm:w-[41rem] sm:h-[25rem] w-[310px] h-[260px] absolute top-4 left-4"
          />
          <NuxtImg
            class="absolute sm:hidden sm:w-[20rem] right-3 sm:right-2 bottom-1 sm:bottom-0"
            alt="rectangle"
            src="/Rectangle2.png"
          />
        </div>
        <div class="self-center">
          <h1 class="text-[#205FAD] font-bold text-2xl sm:text-[2.5rem]">
            Our Core Values
          </h1>
          <p class="text-[#0A0A0A] mt-5 tracking-wide text-md sm:text-sm">
            Making an effort to contribute by communicating openly<br
              class="hidden sm:block"
            />
            and honestly with clients, finding innovative solutions for<br
              class="hidden sm:block"
            />
            them, and ensuring that everyone on the team is on the<br
              class="hidden sm:block"
            />
            same page.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center bg-white my-16 mx-10 gap-10 p-5">
      <h2
        class="text-[#205FAD] text-xl font-medium md:2xl lg:text-3xl 2xl:text-5xl"
      >
        Our Client
      </h2>

      <div
        class="grid grid-cols-3 place-items-center justify-items-center gap-y-10 gap-x-5 items-center sm:grid sm:grid-cols-4 mt-10"
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
</template>

<script setup></script>

<style scoped></style>
