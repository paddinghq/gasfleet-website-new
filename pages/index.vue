<template>
  <div>
    <div class="relative">
      <img
        src="/image/hero-image.png"
        alt="hero"
        class="object-cover h-full w-full absolute insert-0"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
      ></div>
      <div class="relative h-full container mx-auto">
        <div class="text-white py-28 flex flex-col gap-3">
          <h1 class="capitalize text-6xl">
            gasfleet engineering <br />
            limited - EPCM company
          </h1>
          <p class="text-lg sans">
            We are committed to providing innovative solutions and exceptional
            service <br />
            to our clients in the oil and gas industry. With decades of
            experience, our <br />
            team of experts has a deep understanding of the industry and the
            <br />
            challenges our clients face.
          </p>
        </div>
      </div>
    </div>

    <div class="flex bg-white gap-10">
      <img src="/image/services.png" alt="service" class="object-cover" />

      <div class="mt-5 px-10 py-10">
        <h1 class="text-[#205FAD] text-5xl font-medium">Our Services</h1>

        <p class="text-lg mt-5 sans">
          We deliver science, technology and engineering solutions to <br />
          government and companies around the world
        </p>

        <div class="flex gap-4 items-center mt-5">
          <div class="bg-gray-100 p-5">
            <img src="/image/epm.png" alt="emp" />
            <h2 class="uppercase font-bold text-2xl my-1">epcm</h2>
            <p class="sans">
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>
          <div class="bg-gray-100 p-5">
            <img src="/image/gas.png" alt="gas" />
            <h2 class="capitalize font-bold text-2xl my-1">
              natural gas distribution
            </h2>
            <p class="sans">
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center mt-5">
          <div class="bg-gray-100 p-5">
            <img src="/image/power.png" alt="power" />
            <h2 class="capitalize font-bold text-2xl my-1">
              Power distribution
            </h2>
            <p  class="sans">
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>
          <div class="bg-gray-100 p-5">
            <img src="/image/development.png" alt="development" />
            <h2 class="capitalize font-bold text-2xl my-1">
              infrastructure development
            </h2>
            <p class="sans">
              We deliver scrience, technology and engineering solutions to
              government and companies around the world.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="container mx-auto flex py-10 bg-gray-100 gap-10">
        <div
          class="bg-[#205FAD] rounded-lg flex gap-4 flex-col p-5 text-white"
        >
          <h3 class="capitalize text-xl font-bold">Our Executed Projects</h3>
          <p class="text-justify w-96 sans">
            We pride ourseleves on our commitment to safety and 
            quality. We have a proven track record of delivering 
            projects that meet or exceed industry standard, while 
            also minimizing environmental impact and promoting 
            the well being of our employees and the communities 
            in which we operate
          </p>
          <button
            class="bg-white text-[#205FAD] text-center rounded-lg p-2 w-36 cursor-pointer transition-all hover:bg-gray-200"
          >
            See all Projects
          </button>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between gap-10">
            <div class="flex flex-col gap-3">
              <img src="/image/project.png" alt="project" />
              <div class="">
                <p class="sans">Abuja gas fleet expansion</p>
                <span>2023</span>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <img src="/image/project.png" alt="project" />
              <div class="text-base">
                <p class="sans">Abuja gas fleet expansion</p>
                <span>2023</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-5 items-center">
            <Icon
              name="material-symbols:arrow-circle-left-outline"
              color="black"
              size="32"
              class="cursor-pointer"
            />
            <Icon
              name="material-symbols:arrow-circle-right-outline"
              color="black"
              size="32"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto text-center bg-white p-10 mt-5">
      <h2 class="font-bold text-4xl text-[#205FAD] capitalize">Our Client</h2>

      <div
        class="grid grid-cols-4 justify-center gap-5 items-center ml-10 mt-5"
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