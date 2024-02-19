<template>
  <div>
    <div class="banner">
      <NuxtImg class="img" src="/hero.png" />
      <div class="tabs">
        <button class="button">Management</button>
        <button class="button">Engineering</button>
        <button class="button">Admin</button>
        <button class="button">Information Technology</button>
        <button class="button">Contractors</button>
      </div>
    </div>
    <Management />
    <div class="projects">
      <h2 class="convinced">Convinced yet? Check out projects we have done.</h2>
      <div class="convinced">
        <p>
          Unleash the potential of your projects with our pioneering oil and gas
          engineering solutions<br />Let's shape the future together. Talk to us
          about your next groundbreaking project
        </p>
      </div>
      <button class="project-button">Projects</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.project-button {
  background-color: #205FAD;
  padding: 0.8rem;
  border-radius: 0.7rem;
  color: white;
  border: none;
  margin-top: 0.3rem;
}

.projects {
  background-color: #eff6ff;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
}
.convinced {
  color: #333333;
}

.tabs {
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 0;
}

.button {
  color: #777777;
  border: none;
  font-size: 1.3rem;
  font-weight: 900;
}

.button:focus {
  color: #205fad;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 4px;
}
.banner {
  background-color: #f1f1f1;
}

.img {
  width: 100%;
}
</style>
