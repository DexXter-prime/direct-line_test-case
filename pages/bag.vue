<script setup lang="ts">
  import { filterItems } from 'assets/js/consts/consts';
  const filters = reactive(filterItems);


  const offerStore = useOfferStore();
  const bagOffers = computed(() => offerStore.bagOffers);


</script>

<template>
  <div :class="$style.mainFilters">
    <TheFilters
        :filters="filters"
    />
  </div>
  <OfferItem
      v-for="(offer, index) in bagOffers"
      :key="offer.id"
      :offer="offer"
  />
</template>

<style module lang="scss">
.mainFilters {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 7.4rem;
  min-height: 4.8rem;
}
</style>