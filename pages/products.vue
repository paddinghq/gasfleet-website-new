<template>
  <div>
    <Navbar />
    <div>
      <h1>This is the GasFleet Product Page</h1>
      <div class="">
        <NuxtImg
          class=""
          src="/ProjectImage.jpeg"
          alt="This is the Hero image"
        />
        <h1>Projects</h1>
        <h1>
          We are committed to providing our clients with comprehensive and
          innovative solutions to the complex challenges facing the oil and gas
          industry
        </h1>
      </div>
      <div
        class="bg-[#F1F1F1] flex gap-14 font-bold text-xl p-5 justify-center"
      >
        <button class="text-[#777777] active:text-[#205FAD]">
          All Projects
        </button>
        <button class="text-[#777777] active:text-[#205FAD]">
          Completed Projects
        </button>
        <button class="text-[#777777] active:text-[#205FAD]">
          Ongoing Projects
        </button>
      </div>
      <div>This where the card component stays</div>
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
    </div>
    <Footer />
  </div>
</template>

<script setup></script>

<style scoped></style>
