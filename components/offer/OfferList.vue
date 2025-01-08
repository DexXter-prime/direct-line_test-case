<script setup lang="ts">
import type { IOffer } from "~/types";

  interface IProps {
    offers: IOffer[]
  }

  const props = defineProps<IProps>()

</script>

<template>
  <TransitionGroup
      name="offer-list"
      tag="ul"
      :class="$style.OfferList"
  >
    <li
        v-for="offer in props.offers"
        :key="offer.id"
        :class="$style.offerWrapper"
    >
      <OfferItem
          :offer="offer"
      />
    </li>
  </TransitionGroup>
  <Transition name="fade">
    <h2
        v-if="!props.offers.length"
        :class="$style.noOffers"
    >
      Предложения отсутствуют
    </h2>
  </Transition>
</template>

<style module lang="scss">
.OfferList {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  max-width: 116.6rem;

  @media (max-width: 747px) {
    margin-top: 2rem;
  }

  .offerWrapper {
    width: 100%;
  }
}

.noOffers {
  @include text-xl;

  margin-top: 2rem;
  text-align: center;
  color: $blue_main;
}
</style>