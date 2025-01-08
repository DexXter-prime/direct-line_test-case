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
  const filteredAndSearch = computed(() => filteredOffers.value.filter(offer =>
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
  <OfferItem
      v-for="(offer, index) in filteredAndSearch"
      :key="`${offer.title}_offer.id_${index}`"
      :offer="offer"
  />
  <h2
      v-if="!filteredOffers.length"
      :class="$style.noOffers"
  >
    Предложения отсутствуют
  </h2>
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

.noOffers {
  @include text-xl;

  text-align: center;

  color: $blue_main;
}
</style>