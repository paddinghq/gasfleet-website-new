<template>
  <div>
    <footer class="footer">
      <div class="top">
        <div class="left">
          <NuxtImg src="/colored.png" alt="logo" class="" />
          <p class="text-lg mt-5">
            We are committed to providing innovative<br />
            solutions and exceptional service to our clients<br />
            in the oil and gas industry
          </p>
          <div class="flex gap-4 mt-4">
            <NuxtLink
              ><NuxtImg
                src="/Facebookwhite.png"
                alt="facebook"
                
            /></NuxtLink>
            <NuxtLink
              ><NuxtImg
                src="/Linkedinwhite.png"
                alt="facebook"
               
            /></NuxtLink>
          </div>
        </div>
        <div class="link-headings">
          <h3 class="text-lg">Quick Links</h3>
          <div class="links">
            <NuxtLink>Home</NuxtLink>
            <NuxtLink>About Us</NuxtLink>
            <NuxtLink>Projects</NuxtLink>
            <NuxtLink>Sustainability</NuxtLink>
          </div>
        </div>
        <div class="link-headings">
          <h3 class="text-lg">Our Services</h3>
          <div class="links">
            <NuxtLink>Engineering</NuxtLink>
            <NuxtLink>Procurement</NuxtLink>
            <NuxtLink>Construction</NuxtLink>
            <NuxtLink>Management</NuxtLink>
          </div>
        </div>
        <div class="link-headings">
          <h3 class="text-lg">Contact Us</h3>
          <div class="links">
            <NuxtLink
              >17, M.A Oke Street, opposite Diamond Estate, Igando,
              Lagos</NuxtLink
            >
            <NuxtLink>Email: info@gasfleeteng.com</NuxtLink>
            <NuxtLink>Tel: +234(0) 908 954 5886</NuxtLink>
            <NuxtLink>Management</NuxtLink>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <p>
            &copy; Copyright 2024 Gasfleet Engineering Limited. All Rights
            Reserved
          </p>
        </div>
        <div class="privacy">
          <NuxtLink>Privacy Policy</NuxtLink>
          <NuxtLink>Terms and Conditions</NuxtLink>
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

  padding: 2rem 5rem 2rem 5rem;
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

.footer {
  background: #222222;
}

.privacy {
  display: flex;
  gap: 2rem;
}
</style>
