<script setup lang="ts">
   const { data } = await useFetch('/api/mock-offers');
   onMounted(() => {
     console.log(data);
   })
</script>

<template>
  <h1>{{ data?.offers[0].name }}</h1>
</template>

<style module lang="scss">
  h1 {
    @include text-xl;

    color: $main-green;
  }
</style>