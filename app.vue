<script setup lang="ts">

  const offerStore = useOfferStore();

  await callOnce(async () => {
    if (!offerStore?.offers?.length) {
      await offerStore.fetchOffers()
    }
  })

</script>

<template>
  <div class="container">
    <TheHeader />
    <NuxtPage />
  </div>
</template>

<style module lang="scss">

</style>
