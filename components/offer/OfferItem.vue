<script setup lang="ts">
  import type { IOffer } from '~/types';
  import { formatNumberWithSpace } from 'assets/js/utils/numbers';

  interface IProps {
    offer: IOffer
  }

  const signs = {
    rub: '₽',
    auction: 'Аукцион',
    seller: 'Продавец',
    productType: 'Вид товара',
    quantity: 'Количество',
    pricePerItem: 'Стоимость за штуку',
    addToOffer: 'Добавить в сделки',
    amount: 'шт.',
  }

  const props = defineProps<IProps>();

  const totalPrice = computed(() => formatNumberWithSpace(props.offer.price * props.offer.quantity));
  const priceForOneProduct = computed(() => formatNumberWithSpace(props.offer.price));


</script>

<template>
  <article :class="$style.OfferItem">
    <div :class="$style.OfferItem__left">
      <NuxtImg
          :src="props.offer.image"
          width="256"
          height="256"
          :class="$style.product__image"
      />

      <div :class="$style.offerInfo">
        <p :class="$style.offer__type">{{ signs.auction }}</p>
        <h2 :class="[$style.product__title, $style._blue]">{{ props.offer.title }}</h2>
        <p :class="[$style.product__cityPlace, $style._highlight]">
          <Icon
              :name="'icon:mapmark'"
              :class="$style.mapMark"
          />
          {{ props.offer.title }}
        </p>
        <p :class="$style.product__seller">
          {{ signs.seller }}
          <span :class="$style._blue">{{ props.offer.seller }}</span>
        </p>
        <p :class="$style.product__type">
          <span>{{ signs.productType }}</span>
          <span :class="$style._highlight">{{ props.offer.productType }}</span>
        </p>

        <p :class="$style.product__description">
         {{ props.offer.description }}
        </p>
      </div>
    </div>
    <div :class="$style.OfferItem__right">
      <div :class="$style.offer__priceInfo">
        <p :class="$style.offer__totalPrice">{{ totalPrice }} {{ signs.rub }}</p>
        <ul :class="$style.offer__priceList">
          <li :class="$style.offer__priceItem">
            <span :class="$style.price__quantity">{{ signs.quantity }}</span>
            <span :class="[$style.price__quantity, $style._blue]">{{ props.offer.quantity }} {{ signs.amount }}</span>
          </li>
          <li :class="$style.offer__priceItem">
            <span :class="$style.price">{{ signs.pricePerItem }}</span>
            <span :class="[$style.price, $style._blue]">{{ priceForOneProduct }} {{ signs.rub }}</span>
          </li>
        </ul>
      </div>
      <div :class="$style.offer__buttons">
          <button :class="$style.addButton">
            {{ signs.addToOffer }}
          </button>
          <button :class="$style.favouriteButton">
            <Icon :name="'icon:heart'"/>
          </button>
      </div>
    </div>
  </article>
</template>

<style module lang="scss">
.OfferItem {
  margin-top: 2rem;
  width: 116.6rem;
  height: 36.6rem;
  border: 1px solid $blue_border;
  border-radius: calc($main_br_radius * 2);
  display: flex;
  align-items: flex-start;

  ._blue {
    color: $blue_main
  }

  ._highlight {
    color: $blue_text_2;
  }
}

.OfferItem__left {
  display: flex;
  padding: 2rem;
  gap: 2rem;

  .product__image {
    border-radius: $main_br_radius;
  }

  .offerInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    width: 53.6rem;

    .offer__type,
    .product__cityPlace,
    .product__seller,
    .product__type {
      @include text-m;

      color: $blue-text_1;
    }

    .product__type {
      display: flex;
      flex-direction: column;
      gap: .6rem;
    }

    .product__title {
      @include text-m-v2;

      margin-bottom: 2.6rem;
    }

    .product__description {
      @include text-m-v3;

      color: $blue_main;
    }

    .product__cityPlace {
      background-color: $blue_bg;
      border-radius: calc($main_br_radius / 2);
      padding: .5rem .8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .4rem;

      .mapMark {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .product__type {
       background-color: $blue_bg;
       border-radius: $main_br_radius;
       padding: .8rem;
    }
  }
}

.OfferItem__right {
  max-width: 31.4rem;
  height: 100%;
  border: 1px solid $blue_border;
  border-radius: calc($main_br_radius * 2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 2;

  .offer__priceInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .offer__totalPrice {
    @include text-xl;

    color: $blue_main;
  }

  .offer__priceList {
    margin-top: 1.35rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    width: 100%;

    .offer__priceItem {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .price,
      .price__quantity {
        @include text-m;

        display: block;
        color: $blue_text_1;
      }

      ._blue {
        color: $blue_main;
      }
    }
  }

  .offer__buttons {
    width: 100%;
    display: flex;
    gap: 1.2rem;

    .addButton,
    .favouriteButton {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: $main_br_radius;
      background-color: $blue_bg;
      border: none;
      outline: none;
      cursor: pointer;
      height: 5rem;
    }

    .addButton {
      @include text-l-v2;

      color: $blue_main;
      flex-grow: 1;
    }

    .favouriteButton {
      width: 5rem;
      padding: 1.5rem;
    }
  }
}
</style>