import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:["@nuxtjs/tailwindcss",'nuxt-icon', '@nuxt/image',], 
  devtools: { enabled: true },
  // image: {
  //   quality: 100,
  // }
});