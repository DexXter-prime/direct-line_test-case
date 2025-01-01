<script setup lang="ts">
import type { IFilter } from "~/types";

interface IProps {
  filters: IFilter[]
}

const props = defineProps<IProps>();
const activeItemIndex = ref<number>(0);

const mainActiveItem = computed(() => {
    return props.filters[activeItemIndex.value];
});

function setActiveItem(idx: number) {
   activeItemIndex.value = idx;
}

</script>

<template>
  <div :class="$style.TheFilters">
    <span
      v-for="(item, idx) in filters"
      :key="`filter_item_${idx}`"
      :class="[$style.filters__item, { [$style['_active']]: idx === activeItemIndex} ]"
      @click="setActiveItem(idx)"
    >
      {{ item.title }}
    </span>
  </div>
</template>

<style module lang="scss">
.TheFilters {
  border: 1px solid $blue_border;
  border-radius: $main_br_radius;
  padding: 1.2rem 1.2rem 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  background-color: $blue_bg;

  .filters__item {
     @include text-l;

     color: $blue_text_1;

      &:hover {
        cursor: pointer;
      }

      &._active {
        color: $blue_main;
      }
  }
}
</style>