<template>
  <div>
    <footer class="footer">
      <div class="top">
        <div class="left">
          <img src="/colored.png" alt="logo" class="img" />
          <p>
            We are committed to providing innovative<br />
            solutions and exceptional service to our clients<br />
            in the oil and gas industry
          </p>
          <div class="icons">
            <NuxtLink
              ><NuxtImg
                src="Facebookwhite.png"
                alt="facebook"
                height="24"
                width="24"
            /></NuxtLink>
            <NuxtLink
              ><NuxtImg
                src="Linkedinwhite.png"
                alt="facebook"
                height="24"
                width="24"
            /></NuxtLink>
          </div>
        </div>
        <div class="link-headings">
          <h3>Quick Links</h3>
          <div class="links">
            <NuxtLink>Home</NuxtLink>
            <NuxtLink>About Us</NuxtLink>
            <NuxtLink>Projects</NuxtLink>
            <NuxtLink>Sustainability</NuxtLink>
          </div>
        </div>
        <div class="link-headings">
          <h3>Our Services</h3>
          <div class="links">
            <NuxtLink>Engineering</NuxtLink>
            <NuxtLink>Procurement</NuxtLink>
            <NuxtLink>Construction</NuxtLink>
            <NuxtLink>Management</NuxtLink>
          </div>
        </div>
        <div class="link-headings">
          <h3>Contact Us</h3>
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

<style lang="scss" scoped>
.link-headings h3 {
font-weight: 900;
}
.left p {
  font-size: 1.3rem;
}

.img {
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
}

.icons {
  display: flex;
  gap: 1rem;
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
