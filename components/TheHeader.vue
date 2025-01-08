<script setup lang="ts">
  import { menuItems } from 'assets/js/consts/consts';
  const headerMenuItems = reactive(menuItems);

</script>

<template>
    <nav :class="$style.TheHeader">
      <ul :class="$style.menuList">
        <li
            v-for="(item, idx) in headerMenuItems"
            :key="`menu_item_${idx}`"
            :class="$style.menuList_item"
        >
          <NuxtLink
              :to="item.link"
              :class="$style.menuLink"
          >
              <Icon
                  :name="`icon:${item.icon}`"
                  :class="$style.menuLink_icon"
              />
              <span
                  v-if="item.name"
                  :class="$style.menuLink_text"
              >
                {{ item.name }}
              </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
</template>

<style module lang="scss">
  .TheHeader {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 0 0;

    @media (max-width: 747px) {
      justify-content: center;
    }
  }

  .menuList {
    display: flex;
    align-items: center;
  }

  .menuList_item {
    width: 8.6rem;
  }

  .menuLink {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: .4rem;
    padding: .6rem;
    border-radius: $main_br_radius;
    transition: $default_transition;
    color: $blue_main;
  }

  .menuLink_icon{
    width: 2rem;
    height: 2rem;
  }

  .menuLink_text {
    @include text-s;

    color: $blue_main;
  }
</style>