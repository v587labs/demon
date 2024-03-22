<template>
  <el-config-provider size="large">
    <NuxtPage></NuxtPage>
  </el-config-provider>
</template>

<script lang="ts" setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;' }
  ],
})
</script>