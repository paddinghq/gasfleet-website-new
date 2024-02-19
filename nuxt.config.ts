import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:["@nuxtjs/tailwindcss",'nuxt-icon'], 
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
  ],
  image: {
    quality: 100,
  }
});