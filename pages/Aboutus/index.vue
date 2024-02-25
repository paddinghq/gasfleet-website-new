<template>
  <div class="">
    <div class="relative bg-[#f1f1f1]">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[467px]"
        alt="ourteam-image"
        src="/hero.jpg"
      />
      <NuxtImg
        class="absolute top-[50%] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
        src="/rectangle.png"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[52%] left-[32.6%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-bold mt-5 text-5xl">About Us</h1>
        <h1 class="mt-4 text-[1.2rem]">
          We are committed to providing our clients with comprehensive and
          innovative solutions to the<br />complex challenges facing the oil and
          gas industry
        </h1>
      </div>
    </div>
    <div class="p-16 flex gap-16">
      <div class="w-1/2 relative h-[28rem]">
        <NuxtImg class="w-[20rem]" alt="rectangle" src="/Rectangle1.png" />
        <NuxtImg
          class="w-[38rem] h-[25rem] absolute top-6 left-6"
          alt="frame"
          src="/Frame1.png"
        />
        <NuxtImg
          class="absolute w-[20rem] right-2 bottom-0"
          alt="rectangle"
          src="/Rectangle2.png"
        />
      </div>
      <div class="w-1/2 self-center">
        <h1 class="text-[#205FAD] font-bold text-[3rem]">Our History</h1>
        <p class="text-[#0A0A0A] font-normal text-[1.17rem] mt-6">
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
    <div class="p-16">
      <div class="flex justify-center gap-5">
        <NuxtImg
          class="w-[30rem] h-[0.35rem] self-center"
          src="/Rectangle3.png"
          alt="line"
        />
        <h2 class="text-4xl text-[#205FAD] font-bold">Gasfleet Engineering</h2>
        <NuxtImg
          class="w-[30rem] h-[0.35rem] self-center"
          src="/Rectangle4.png"
          alt="line"
        />
      </div>
      <p class="text-center text-[#0A0A0A] text-lg mt-5">
        Providing sustainable Gas & Power solution with innovation and service
        excellence
      </p>

      <div class="flex gap-[10rem] mt-12">
        <div class="w-1/2 relative h-[28rem]">
          <NuxtImg src="/Rectangle6.png" class="w-[30rem]" />
          <NuxtImg
            src="/Frame2.png"
            class="w-[42rem] h-[25rem] absolute top-4 left-4"
          />
        </div>
        <div class="self-center">
          <h1 class="text-[#205FAD] font-bold text-4xl">Our Mission</h1>
          <p class="text-[#0A0A0A] mt-5 tracking-wide text-lg">
            To provide world class EPCM services delivery to our<br />
            valued client in a manner that is consistent with our core<br />
            values and best safety practices.
          </p>
        </div>
      </div>

      <div class="relative flex gap-[10rem] mt-12">
        <div class="self-center">
          <h1 class="text-[#205FAD] font-bold text-4xl">Our Vision</h1>
          <p class="text-[#0A0A0A] mt-5 tracking-wide text-lg">
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
            class="w-[42rem] h-[25rem] absolute top-4 right-4"
          />
        </div>
      </div>

      <div class="flex gap-[10rem] mt-12">
        <div class="w-1/2 relative h-[28rem]">
          <NuxtImg src="/Rectangle6.png" class="w-[30rem]" />
          <NuxtImg
            src="/Frame3.png"
            class="w-[42rem] h-[25rem] absolute top-4 left-4"
          />
        </div>
        <div class="self-center">
          <h1 class="text-[#205FAD] font-bold text-4xl">Our Core Values</h1>
          <p class="text-[#0A0A0A] mt-5 tracking-wide text-lg">
            Making an effort to contribute by communicating openly<br />
            and honestly with clients, finding innovative solutions for<br />
            them, and ensuring that everyone on the team is on the<br />
            same page.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-[#F1F1F1] py-14 px-6">
      <h1 class="text-center text-[#205FAD] font-bold text-4xl">Our Clients</h1>
      <div class="">
        <div class="flex justify-between px-14 mt-10">
          <NuxtImg class="w-24" src="/image/alexa.png" alt="alexa" />
          <NuxtImg class="w-24" src="/image/gaslink.png" alt="gaslink" />
          <NuxtImg class="w-24" src="/image/gns.png" alt="gns" />
          <NuxtImg class="w-24" src="/image/powergas.png" alt="powergas" />
        </div>
        <div class="flex justify-between px-14 mt-10">
          <NuxtImg class="w-24" src="/image/tgnl.png" alt="tgnl" />
          <NuxtImg class="w-24" src="/image/ccetc.png" alt="ccetc" />
          <NuxtImg class="w-24" src="/image/greenville.png" alt="greenville" />
          <NuxtImg class="w-24" src="/image/chcg.png" alt="chcg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
