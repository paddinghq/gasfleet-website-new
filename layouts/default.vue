<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

p,
.sans {
  font-family: "Open Sans", sans-serif;
}

.oswald {
  font-family: "Oswald";
}

h1,
h2,
h3 {
  font-family: Oswald;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: fade(0.1rem);
}

::-webkit-scrollbar {
  background: transparent;
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #205fad;
  border-radius: 10px;
}
</style>

<template>
  <div>
    <div class="scroll-smooth">
      <!-- <Header /> -->
      <slot></slot>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

