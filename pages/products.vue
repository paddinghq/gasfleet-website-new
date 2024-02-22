<template>
  <div>
    <Navbar />

    <div class="bg-gray-200 relative">
      <img
        src="../static/ProjectImage.jpeg"
        alt="Project Image"
        class="w-full filter brightness-25 relative h-[467px]"
      />
      <img
        src="../static/rectangle.png"
        alt="rectangle Image"
        class="absolute top-1/2 left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
      ></div>
      <div
        class="text-white absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-bold mt-5 text-5xl">Projects</h1>
        <h1 class="mt-5 text-[1.2rem]">
          We are committed to providing our clients with comprehensive and
          innovative solutions to the complex challenges facing the oil and gas
          industry
        </h1>
      </div>
    </div>
    <div class="bg-[#F1F1F1] flex gap-14 font-bold text-xl p-5 justify-center">
      <div class="flex flex-col">
        <button class="text-[#205FAD] active:text-[#205FAD]">
          All Projects
        </button>
        <hr class="border-2 border-[#205FAD] w-[110px] mt-1" />
      </div>

      <button class="text-[#777777] active:text-[#205FAD]">
        Completed Projects
      </button>
      <button class="text-[#777777] active:text-[#205FAD]">
        Ongoing Projects
      </button>
    </div>
    <div class="flex flex-col items-center">
      <div class="grid grid-cols-3 gap-10 p-20">
        <div>
          <img
            src="../static/project1.png"
            alt="project image"
            class="h-[320px]"
          />
          <p class="mt-5 mb-3 text-sm">Abuja Gas Plant Expansion</p>
          <p class="text-sm">2023</p>
        </div>
        <div>
          <img
            src="../static/project1.png"
            alt="project image"
            class="h-[320px]"
          />
          <p class="mt-5 mb-3 text-sm">Abuja Gas Plant Expansion</p>
          <p class="text-sm">2023</p>
        </div>
        <div>
          <img
            src="../static/project1.png"
            alt="project image"
            class="h-[320px]"
          />
          <p class="mt-5 mb-3 text-sm">Abuja Gas Plant Expansion</p>
          <p class="text-sm">2023</p>
        </div>
        <div>
          <img
            src="../static/project1.png"
            alt="project image"
            class="h-[320px]"
          />
          <p class="mt-5 mb-3 text-sm">Abuja Gas Plant Expansion</p>
          <p class="text-sm">2023</p>
        </div>
        <div>
          <img
            src="../static/project1.png"
            alt="project image"
            class="h-[320px]"
          />
          <p class="mt-5 mb-3 text-sm">Abuja Gas Plant Expansion</p>
          <p class="text-sm">2023</p>
        </div>
        <div>
          <img
            src="../static/project1.png"
            alt="project image"
            class="h-[320px]"
          />
          <p class="mt-5 mb-3 text-sm">Abuja Gas Plant Expansion</p>
          <p class="text-sm">2023</p>
        </div>
      </div>
      <div class="mb-20">
        <button
          class="text-black p-3 text-sm border-2 border-[#205FAD] rounded-lg hover:text-white hover:bg-[#205FAD]"
        >
          Learn More
        </button>
      </div>
    </div>
    <div class="flex flex-col bg-[#EFF6FF] p-10 items-center">
      <p class="text-3xl font-semibold my-3">
        Ready to Revolutionize Your Project? Get in Touch With Us
      </p>
      <p class="text-[#333333] text-lg">
        Unleash the Potential of your Projects with our pioneering Oil and gas
        Solutions.
      </p>
      <p class="text-[#333333] text-lg my-1">
        Let's Shape the future together. Talk to Us about your next
        groudbreaking project
      </p>
      <button class="my-5 bg-[#205FAD] text-sm p-3 text-white rounded-lg">
        Contact Us
      </button>
    </div>
    <Footer />
  </div>
</template>

<script setup></script>

<style scoped></style>
