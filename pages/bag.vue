<script setup lang="ts">
  import { filterItems } from 'assets/js/consts/consts';
  import { type filterTypes, type IFilter} from "~/types";
  const filters = reactive<IFilter[]>(filterItems);
  const filterValue = ref<filterTypes>(filters[0].value);

  const offerStore = useOfferStore();
  const bagOffers = computed(() => offerStore.bagOffers);

  watch(filterValue, (nv) => {
    offerStore.setFilterStatus(nv);
  });

  const filteredOffers = computed(() => offerStore.filteredOffers(bagOffers.value));

</script>

<template>
  <div :class="$style.mainFilters">
    <TheFilters
        :filters="filters"
        v-model="filterValue"
    />
  </div>
  <div :class="$style.listWrapper">
    <OfferList
        :offers="filteredOffers"
    />
  </div>
</template>

<style module lang="scss">
.mainFilters {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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