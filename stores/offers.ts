import {defineStore} from 'pinia';
import type {IOffer} from '~/types';
import { offerStatus } from "~/types";

export const useOfferStore = defineStore('offers', {
    state: () => {
        return {
            offers: [] as IOffer[],
            reqError: null,
        }
    },
    getters: {
        stockOffers(): IOffer[] {
            return this.offers.filter(offer => offer.status === offerStatus.stockStatus);
        },

        bagOffers(): IOffer[] {
            return this.offers.filter(offer => offer.status === offerStatus.bagStatus || offer.status === offerStatus.selledStatus);
        },

        likedOffers(): IOffer[] {
            return this.offers.filter(offer => offer.liked);
        }
    },
    actions: {
        toggleLikeOffer(id: number) {
            const offer = this.offers.find(offer => offer.id === id);
            if (offer) {
                offer.liked = !offer.liked;
            }
        },

        setOfferStatus(id: number, status: offerStatus) {
            const offer = this.offers.find(offer => offer.id === id);
            if (offer) {
                offer.status = status;
            }
        },

        async fetchOffers() {
            interface IOfferRes {
                offers: IOffer[]
            }
            try {
                const data = await $fetch<IOfferRes>('/api/mock-offers');
                this.offers = data.offers;
            } catch (e: any) {
                this.reqError = e.message || 'Нет существующих предложений';
                console.log(e);
            }
        }
    },
});