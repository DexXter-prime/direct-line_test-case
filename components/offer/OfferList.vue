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

  </div>
</template>

<style module lang="scss">
.OfferList {
  //
}
</style>