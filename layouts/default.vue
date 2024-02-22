<template>
  <div>
    <div class="xl:hidden">
      mobile & tab design not ready yet
    </div>

    <div class="hidden xl:block">
      <AppHeader />
      <slot></slot>
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
</style>
