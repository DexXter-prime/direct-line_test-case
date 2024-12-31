<script setup lang="ts">

const offerStore = useOfferStore();

  onServerPrefetch(async () => {
    if (!offerStore?.offers?.length) {
      await offerStore.fetchOffers()
    }
  })

  const offers = reactive(offerStore.offers || [])

  onMounted(() => {
    console.log(offers, 'offers');
  })

</script>

<template>
  <div class="container">
    <TheHeader />
    <NuxtPage />
  </div>
</template>
