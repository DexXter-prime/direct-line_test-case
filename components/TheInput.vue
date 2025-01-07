<script setup lang="ts">
  const [search, modifiers] = defineModel({
    set(value: string) {
      if (modifiers.capitalize && value.length) {
        return value[0].toUpperCase() + value.slice(1);
      }

      return value
    }
  });

</script>

<template>
  <div :class="$style.TheInput">
      <input
          v-model="search"
          :class="$style.searchInput"
      >
      <button
          :class="$style.searchButton"
      >
        <Icon
            :name="'icon:find'"
            :class="$style.searchIcon"
        />
      </button>
  </div>
</template>

<style module lang="scss">
.TheInput {
  border: 1px solid $blue_border;
  border-radius: $main_br_radius;
  padding: .4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;
  width: 27.4rem;
  transition: $default_transition;
}

.searchInput {
  flex-grow: 1;
  margin-left: 2rem;
  border: none;
  outline: none;

  @include text-l;
  color: $blue_main;
}

.searchButton {
  border-radius: $main_br_radius;
  background-color: $blue_main;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
}

.searchIcon {
  width: 2rem;
  height: 2rem;
}
</style>