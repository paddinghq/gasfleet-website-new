<template>
  <div>
    <footer class="bg-[#222222]">
      <div class="flex justify-between text-[#fffdfd] py-[4rem] px-[5rem]">
        <div class="left">
          <NuxtImg src="/colored.png" alt="logo" class="w-12" />
          <p class="text-base mt-8">
            We are committed to providing innovative<br />
            solutions and exceptional service to our clients<br />
            in the oil and gas industry
          </p>
          <div class="flex gap-4 mt-8">
            <NuxtLink
              ><svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="7.5"
                  stroke="#FFFDFD"
                />
                <path
                  d="M19.915 17.0416L20.3709 14.1448H17.5623V12.2618C17.5623 11.4697 17.9544 10.6957 19.2083 10.6957H20.5031V8.22881C19.7491 8.10857 18.9871 8.04351 18.2234 8.03418C15.9118 8.03418 14.4027 9.42377 14.4027 11.9359V14.1448H11.8403V17.0416H14.4027V24.0484H17.5623V17.0416H19.915Z"
                  fill="#FFFDFD"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              ><svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="7.5"
                  stroke="#FFFDFD"
                />
                <path
                  d="M12.3191 22.4843V13.8402H9.4485V22.4843H12.3194H12.3191ZM10.8844 12.6602C11.8852 12.6602 12.5083 11.9964 12.5083 11.1669C12.4896 10.3185 11.8852 9.67322 10.9034 9.67322C9.92097 9.67322 9.2793 10.3185 9.2793 11.1668C9.2793 11.9963 9.90216 12.6601 10.8656 12.6601H10.8842L10.8844 12.6602ZM13.9081 22.4843H16.7784V17.6575C16.7784 17.3995 16.7972 17.1409 16.873 16.9566C17.0804 16.4402 17.5528 15.9057 18.3459 15.9057C19.3844 15.9057 19.8001 16.6983 19.8001 17.8604V22.4843H22.6704V17.528C22.6704 14.873 21.2544 13.6375 19.3658 13.6375C17.8174 13.6375 17.1374 14.5037 16.7596 15.0937H16.7787V13.8405H13.9082C13.9457 14.6514 13.908 22.4846 13.908 22.4846L13.9081 22.4843Z"
                  fill="#FFFDFD"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
        <div class="">
          <h3 class="text-sm font-bold">Quick Links</h3>
          <div class="flex flex-col gap-[1rem] mt-[2rem]">
            <NuxtLink class="sans text-sm" to="/">Home</NuxtLink>
            <NuxtLink class="sans text-sm" to="/aboutus">About Us</NuxtLink>
            <NuxtLink class="sans text-sm" to="/projects">Projects</NuxtLink>
            <NuxtLink class="sans text-sm" to="/sustainability"
              >Sustainability</NuxtLink
            >
          </div>
        </div>
        <div class="">
          <h3 class="text-sm font-black">Our Services</h3>
          <div class="flex flex-col gap-[1rem] mt-[2rem]">
            <NuxtLink class="sans text-sm" to="/">Engineering</NuxtLink>
            <NuxtLink class="sans text-sm" to="/">Procurement</NuxtLink>
            <NuxtLink class="sans text-sm" to="/">Construction</NuxtLink>
            <NuxtLink class="sans text-sm" to="/">Management</NuxtLink>
          </div>
        </div>
        <div class="">
          <h3 class="text-sm font-black">Contact Us</h3>
          <div class="flex flex-col gap-[1rem] mt-[2rem]">
            <p class="text-sm">17, M.A Oke Street, opposite Diamond Estate, Igando, Lagos</p>
            <p class="text-sm">
              <span class="font-bold">
                Email:
              </span>
              <a href="mailto:info@gasfleeteng.com" class="hover:underline" >info@gasfleeteng.com </a>
            </p>
            <p class="text-sm">
              <span class="font-bold">
                Tell:
              </span>
              <a href="tel:+2349089545886" class="hover:underline">+234(0) 908 954 5886 </a>
            </p>
            <NuxtLink class="text-sm">Management</NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="bg-[#191919] py-[1.5rem] px-[5rem] text-[#FFFDFD] text-xs flex items-center justify-between"
      >
        <div>
          <p class="text-xs">
            &copy; Copyright 2024 Gasfleet Engineering Limited. All Rights
            Reserved
          </p>
        </div>
        <div class="flex gap-[2rem]">
          <NuxtLink class="text-xs">Privacy Policy</NuxtLink>
          <NuxtLink class="text-xs">Terms and Conditions</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>