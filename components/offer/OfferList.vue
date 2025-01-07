<script setup lang="ts">
import type { IOffer } from "~/types";

interface IProps {
  offers: IOffer[]
}

  const props = defineProps<IProps>()

  console.log(props, 'props');
</script>

<template>
  <div :class="$style.OfferList">
      <OfferItem
          v-for="(offer, index) in props.offers"
          :key="`${index}_${offer.id}_${offer.title}`"
          :offer="offer"
      />
  </div>
</template>

<style module lang="scss">
.OfferList {
  //
}
</style>