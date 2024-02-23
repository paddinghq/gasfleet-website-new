<template>
  <div>
    <div class="xl:hidden">
      mobile & tab design not ready yet
    </div>

    <div class="hidden xl:block">
      <Header />
      <slot></slot>
      <Footer />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.sans {
  font-family: "Open Sans", sans-serif;
}

.oswald {
  font-family: "Oswald";
}

h1, h2, h3 {
  font-family: Oswald;
}
</style>