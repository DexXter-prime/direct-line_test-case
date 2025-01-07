<script setup lang="ts">
  import { filterItems } from 'assets/js/consts/consts';

  const searchValue = ref('');

  const filters = reactive(filterItems);
  const offerStore = useOfferStore();
  const stockOffers = computed(() => offerStore.stockOffers);
</script>

<template>
  <div :class="$style.mainFilters">
    <TheFilters
        :filters="filters"
    />
    <TheInput
        v-model.capitalize="searchValue"
    />
  </div>
  <OfferItem
      v-for="(offer, index) in stockOffers"
      :key="offer.id"
      :offer="offer"
  />
</template>

<style module lang="scss">
.mainFilters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 7.4rem;
  min-height: 4.8rem;
}
</style>