<template>
  <div class="bg-[#222222]">
    <footer>
      <div class="container mx-auto">
        <div class="top">
          <div class="left">
            <NuxtLink to="/"><NuxtImg src="/colored.png" alt="logo" class="" /></NuxtLink>
            
            <p class="text-lg mt-5 sans">
              We are committed to providing innovative<br />
              solutions and exceptional service to our clients<br />
              in the oil and gas industry
            </p>
            <div class="flex gap-4 mt-4">
              <NuxtLink><NuxtImg src="/Facebookwhite.png" alt="facebook"/></NuxtLink>
              <NuxtLink><NuxtImg src="/Linkedinwhite.png" alt="facebook"/></NuxtLink>
            </div>
          </div>
          <div class="link-headings">
            <h3 class="text-lg">Quick Links</h3>
            <div class="links">
              <NuxtLink class="sans" to="/">Home</NuxtLink>
              <NuxtLink class="sans" to="aboutus">About Us</NuxtLink>
              <NuxtLink class="sans" to="projects">Projects</NuxtLink>
              <NuxtLink class="sans" to="sustainability">Sustainability</NuxtLink>
            </div>
          </div>
          <div class="link-headings">
            <h3 class="text-lg">Our Services</h3>
            <div class="links">
              <NuxtLink class="sans" to="power">Engineering</NuxtLink>
              <NuxtLink class="sans" to="power">Procurement</NuxtLink>
              <NuxtLink class="sans" to="power">Construction</NuxtLink>
              <NuxtLink class="sans" to="power">Management</NuxtLink>
            </div>
          </div>
          <div class="link-headings">
            <h3 class="text-lg">Contact Us</h3>
            <div class="links">
              <NuxtLink class="sans"
                >17, M.A Oke Street, opposite Diamond Estate, Igando,
                Lagos</NuxtLink
              >
              <NuxtLink class="sans">
                Email: <a href="mailto:info@gasfleeteng.com">info@gasfleeteng.com</a>
              </NuxtLink>
              <NuxtLink class="sans">Tel: <a href="tel:+234(0)9089545886">+234(0) 908 954 5886</a></NuxtLink>
              <NuxtLink class="sans">Management</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="container mx-auto flex justify-between">
          <div>
            <p class="sans">
              &copy; Copyright 2024 Gasfleet Engineering Limited. All Rights
              Reserved
            </p>
          </div>

          <div class="privacy">
            <NuxtLink class="sans">Privacy Policy</NuxtLink>
            <NuxtLink class="sans">Terms and Conditions</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.link-headings h3 {
  font-weight: 900;
}

.NuxtImg {
  margin-top: 1.2rem;
}

.top {
  display: flex;
  justify-content: space-between;
  color: #fffdfd;
  padding: 2rem 0;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 100;
  margin-top: 1rem;
}

.bottom {
  background: #191919;
  padding: 0.5rem 5rem;
  color: #fffdfd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.privacy {
  display: flex;
  gap: 2rem;
}
</style>
