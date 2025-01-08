<script setup lang="ts">
  import type { IOffer } from '~/types';
  import { formatNumberWithSpace } from 'assets/js/utils/numbers';
  import { offerStatus, offerTypes } from "~/types";
  import { useCssModule } from "vue";

  interface IProps {
    offer: IOffer
  }

  const signs = {
    rub: '₽',
    auction: 'Аукцион',
    directSales: 'Прямые продажи',
    seller: 'Продавец',
    productType: 'Вид товара',
    quantity: 'Количество',
    pricePerItem: 'Стоимость за штуку',
    amount: 'шт.',

    addToOffer: 'Добавить в сделки',
    pay: 'Оплатить',
    payed: 'Оплачено',
  }

  const $style = useCssModule();


  const props = defineProps<IProps>();

  const totalPrice = computed(() => formatNumberWithSpace(props.offer.price * props.offer.quantity));
  const priceForOneProduct = computed(() => formatNumberWithSpace(props.offer.price));
  const isSelled = computed(() => props.offer.status === offerStatus.selledStatus);

  const offerStore = useOfferStore();

  function toggleLike(): void {
    offerStore.toggleLikeOffer(props.offer.id)
  }

  function setOfferStatus() {
    switch (props.offer.status) {
      case offerStatus.stockStatus:
        offerStore.setOfferStatus(props.offer.id, offerStatus.bagStatus);
        break;
      case offerStatus.bagStatus:
        offerStore.setOfferStatus(props.offer.id, offerStatus.selledStatus);
        break;
      default:
        offerStore.setOfferStatus(props.offer.id, offerStatus.stockStatus);
        break;
    }
  }

  const mainButtonStyles = computed(() => {
    return [{
      [$style['_bag']]: props.offer.status === offerStatus.bagStatus,
      [$style['_disabled']]: props.offer.status === offerStatus.selledStatus,
    }]
  });

  const buttonContent = reactive({
    [offerStatus.bagStatus]: signs.pay,
    [offerStatus.stockStatus]: signs.addToOffer,
    [offerStatus.selledStatus]: signs.payed,
  });

  const offerType = reactive({
    [offerTypes.direct]: signs.directSales,
    [offerTypes.auction]: signs.auction,
  })

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
        <p :class="$style.offer__type">{{ offerType[props.offer.offerType] }}</p>
        <h2 :class="[$style.product__title, $style._blue]">{{ props.offer.title }}</h2>
        <p :class="[$style.product__cityPlace, $style._highlight]">
          <Icon
              :name="'icon:mapmark'"
              :class="$style.mapMark"
          />
          {{ props.offer.city }}
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
          <button
              @click="setOfferStatus"
              :disabled="isSelled"
              :class="[$style.addButton, mainButtonStyles]"
          >
            {{ buttonContent[props.offer.status] }}
          </button>
          <button
              @click="toggleLike"
              :class="[$style.favouriteButton, { [$style['_liked']]: props.offer.liked }]"
          >
            <Icon
                :name="'icon:heart'"
                :class="$style.buttonIcon"
            />
          </button>
      </div>
    </div>
  </article>
</template>

<style module lang="scss">
.OfferItem {
  width: 100%;
  height: 36.6rem;
  border: 1px solid $blue_border;
  border-radius: calc($main_br_radius * 2);
  display: flex;
  align-items: flex-start;
  position: relative;

  @media (max-width: 747px) {
    flex-direction: column;
    padding: 1rem;
    height: auto;
  }

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

  @media (max-width: 747px) {
    flex-direction: column;
    padding: 0;
  }

  .product__image {
    border-radius: $main_br_radius;

    @media (max-width: 747px) {
      width: 100%;
    }
  }

  .offerInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    max-width: 53.6rem;

    .offer__type,
    .product__cityPlace,
    .product__seller,
    .product__type {
      @include text-m;

      color: $blue-text_1;
    }

    .product__seller {
      display: flex;
      gap: .4rem;
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

      max-width: 53.6rem;
      min-height: 6.4rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: $blue_main;

      @media (max-width: 747px) {
        overflow: visible;
        white-space: unset;
        text-overflow: unset;
      }
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
  width: 31.4rem;
  height: calc(100% + 2px);
  border: 1px solid $blue_border;
  border-radius: calc($main_br_radius * 2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 2;
  position: relative;
  top: -1px;
  right: -1px;

  @media (max-width: 747px) {
    margin-top: 2rem;
    width: 100%;
    height: 20rem;
  }

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
      transition: $default_transition;
    }

    .addButton {
      @include text-l-v2;

      color: $blue_main;
      flex-grow: 1;

      &._bag {
        color: white;
        background-color: $main_green;
      }

      &._disabled {
        color: $blue_text_1;
        background-color: white;
        border: 1px solid $blue_border;

        &:disabled {
          cursor: default;
          pointer-events: all !important;
        }
      }
    }

    .favouriteButton {
      width: 5rem;
      padding: 1.5rem;
      color: red;

      .buttonIcon {
        width: 2rem;
        height: 2rem;
      }

      &._liked {
        background-color: $blue_main;
        color: white;
      }
    }
  }
}
</style>