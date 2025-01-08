<script setup lang="ts">
import {filterItems} from 'assets/js/consts/consts';
import {type filterTypes, type IFilter, offerTypes} from "~/types";

  const filters = reactive<IFilter[]>(filterItems);
  const filterValue = ref<filterTypes>(filters[0].value);
  const searchValue = ref<string>('');


  const offerStore = useOfferStore();
  const stockOffers = computed(() => offerStore.stockOffers);

  watch(filterValue, (nv) => {
      offerStore.setFilterStatus(nv);
  });

  const filteredOffers = computed(() => offerStore.filteredOffers(stockOffers.value));
  const filteredAndSearchOffers = computed(() => filteredOffers.value.filter(offer =>
      offer.title.toLowerCase().includes(searchValue.value.toLowerCase())));

</script>

<template>
  <div :class="$style.mainFilters">
    <TheFilters
        :filters="filters"
        v-model="filterValue"
    />
    <TheInput
        v-model.capitalize="searchValue"
    />
  </div>
  <div :class="$style.listWrapper">
    <OfferList
        :offers="filteredAndSearchOffers"
    />
  </div>
</template>

<style module lang="scss">
.mainFilters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 7.4rem;
  min-height: 4.8rem;

  @media (max-width: 747px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
}

.listWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>