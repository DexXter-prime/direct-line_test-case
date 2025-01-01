<script setup lang="ts">
import { filterItems } from 'assets/js/consts/consts';
const filters = reactive(filterItems);

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
    <TheFilters
        :filters="filters"
    />
    <NuxtPage />
  </div>
</template>
