<script setup>
import { ref } from "vue";

const upArrow = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.7046 4.8C8.23794 4.8 7.77127 4.97994 7.41794 5.33338L3.07127 9.68005C2.87794 9.87338 2.87794 10.1934 3.07127 10.3867C3.2646 10.5801 3.5846 10.5801 3.77794 10.3867L8.1246 6.04005C8.4446 5.72005 8.9646 5.72005 9.2846 6.04005L13.6313 10.3867C13.8246 10.5801 14.1446 10.5801 14.3379 10.3867C14.5313 10.1934 14.5313 9.87338 14.3379 9.68005L9.99127 5.33338C9.63794 4.97994 9.17127 4.8 8.7046 4.8Z" fill="#0A0A0A"/>
</svg>`;

const downArrow = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.7046 11.2C8.23794 11.2 7.77127 11.0201 7.41794 10.6667L3.07127 6.32005C2.87794 6.12672 2.87794 5.80672 3.07127 5.61338C3.2646 5.42005 3.5846 5.42005 3.77794 5.61338L8.1246 9.96005C8.4446 10.2801 8.9646 10.2801 9.2846 9.96005L13.6313 5.61338C13.8246 5.42005 14.1446 5.42005 14.3379 5.61338C14.5313 5.80672 14.5313 6.12672 14.3379 6.32005L9.99127 10.6667C9.63794 11.0201 9.17127 11.2 8.7046 11.2Z" fill="#0A0A0A"/>
</svg>`;
const isDropdownOpen1 = ref(false);
const isDropdownOpen2 = ref(false);
const toggleDropdown1 = () => {
  isDropdownOpen1.value = !isDropdownOpen1.value;
};
const toggleDropdown2 = () => {
  isDropdownOpen2.value = !isDropdownOpen2.value;
};
</script>

<template>
  <div class="py-[2rem] px-[4rem] flex justify-between items-center">
    <div><NuxtImg src="/colored.png" alt="logo" class="w-12" /></div>

    <header>
      <nav class="flex gap-[2rem]">
        <button
          class="text-base font-semibold bg-white border-none flex gap-[0.3rem] items-center"
          @click="toggleDropdown1"
        >
          <NuxtLink>Who we are</NuxtLink>
          <span class="mt-1" v-html="isDropdownOpen1 ? upArrow : downArrow"></span>
        </button>
        <button
          class="text-base font-semibold bg-white border-none flex gap-[0.3rem] items-center"
          @click="toggleDropdown2"
        >
          <NuxtLink>What we do</NuxtLink>
          <span class="mt-1" v-html="isDropdownOpen2 ? upArrow : downArrow"></span>
        </button>
        <button
          class="text-base font-semibold bg-white border-none flex gap-[0.5rem] items-center"
        >
          <NuxtLink class="">Projects</NuxtLink>
        </button>
        <button
          class="text-base font-semibold bg-white border-none flex gap-[0.5rem] items-center"
        >
          <NuxtLink class="">Sustainability </NuxtLink>
        </button>
      </nav>
    </header>
    <div class="flex gap-[2rem]">
      <div class="flex items-center">
        <input
          class="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        /><svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.66683 14.5C3.90016 14.5 0.833496 11.4334 0.833496 7.66671C0.833496 3.90004 3.90016 0.833374 7.66683 0.833374C11.4335 0.833374 14.5002 3.90004 14.5002 7.66671C14.5002 11.4334 11.4335 14.5 7.66683 14.5ZM7.66683 1.83337C4.44683 1.83337 1.8335 4.45337 1.8335 7.66671C1.8335 10.88 4.44683 13.5 7.66683 13.5C10.8868 13.5 13.5002 10.88 13.5002 7.66671C13.5002 4.45337 10.8868 1.83337 7.66683 1.83337Z"
            fill="#0A0A0A"
          />
          <path
            d="M14.6666 15.1666C14.54 15.1666 14.4133 15.12 14.3133 15.02L12.98 13.6866C12.7866 13.4933 12.7866 13.1733 12.98 12.98C13.1733 12.7866 13.4933 12.7866 13.6866 12.98L15.02 14.3133C15.2133 14.5066 15.2133 14.8266 15.02 15.02C14.92 15.12 14.7933 15.1666 14.6666 15.1666Z"
            fill="#292D32"
          />
        </svg>
      </div>
      <div class="flex gap-[2rem]">
        <NuxtLink
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="7.5"
              stroke="#205FAD"
            />
            <path
              d="M14.9363 12.7812L15.2783 10.6086H13.1719V9.19634C13.1719 8.60226 13.466 8.02175 14.4063 8.02175H15.3775V6.17161C14.8119 6.08142 14.2405 6.03264 13.6677 6.02563C11.934 6.02563 10.8021 7.06783 10.8021 8.95192V10.6086H8.88037V12.7812H10.8021V18.0363H13.1719V12.7812H14.9363Z"
              fill="#205FAD"
            />
          </svg>
        </NuxtLink>
        <NuxtLink
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="7.5"
              stroke="#205FAD"
            />
            <path
              d="M9.23934 16.8632V10.3801H7.08638V16.8632H9.23957H9.23934ZM8.16331 9.4951C8.91394 9.4951 9.38125 8.99727 9.38125 8.37513C9.3672 7.73881 8.91394 7.25488 8.17758 7.25488C7.44073 7.25488 6.95947 7.73881 6.95947 8.37507C6.95947 8.99721 7.42662 9.49504 8.1492 9.49504H8.16314L8.16331 9.4951ZM10.431 16.8632H12.5838V13.2431C12.5838 13.0496 12.5979 12.8556 12.6548 12.7174C12.8103 12.3301 13.1646 11.9292 13.7595 11.9292C14.5383 11.9292 14.85 12.5237 14.85 13.3953V16.8632H17.0028V13.146C17.0028 11.1547 15.9408 10.2281 14.5244 10.2281C13.3631 10.2281 12.853 10.8778 12.5697 11.3202H12.584V10.3803H10.4312C10.4593 10.9885 10.431 16.8634 10.431 16.8634L10.431 16.8632Z"
              fill="#205FAD"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
