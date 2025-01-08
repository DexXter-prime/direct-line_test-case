<script setup lang="ts">
import type { IFilter } from "~/types";

interface IProps {
  filters: IFilter[],
  modelValue: string,
}

const props = defineProps<IProps>();
const emit = defineEmits(['update:modelValue']);
const activeItemIndex = ref<number>(0);

const initialFilterValue = computed(() => props.filters[0]?.value);
const filterModel = ref<string>(initialFilterValue.value);


const mainActiveItem = computed(() => {
    return props.filters[activeItemIndex.value];
});

watch(mainActiveItem, (nv) => {
  filterModel.value = nv.value;
  emit('update:modelValue', filterModel.value);
})

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
  max-width: 30.4rem;
  height: 4rem;

  .filters__item {
     @include text-l;

     transition: $default_transition;

     white-space: nowrap;

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