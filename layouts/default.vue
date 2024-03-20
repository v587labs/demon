<script setup lang="ts">

</script>

<template>
  <div class="fixed h-80px  z-999 top-0 left-0 w-full  bg-white">header</div>
  <div class="h-80px w-full"></div>
  <main class="lg:w-1200px md:w-full m-a min-h-100vh overflow-x-hidden ">
    <slot/>
  </main>
  <div>footer</div>
</template>

<style scoped>

</style>