<script setup lang="ts">
  import { filterItems } from 'assets/js/consts/consts';

  const filters = reactive(filterItems);
  const offerStore = useOfferStore();
  const offers = offerStore.offers;
</script>

<template>
  <div :class="$style.mainFilters">
    <TheFilters
        :filters="filters"
    />
  </div>

  <OfferList
      :offers="offers?.offers"
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