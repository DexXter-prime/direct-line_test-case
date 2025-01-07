import {defineStore} from 'pinia';
import type {IOffer} from '~/types';

export const useOfferStore = defineStore('offers', {
    state: () => {
        return {
            offers: [] as IOffer[] | null,
            reqError: null,
        }
    },
    actions: {
        async fetchOffers() {
            try {
                this.offers = await $fetch<IOffer[]>('/api/mock-offers');
            } catch (e: any) {
                this.reqError = e.message || 'Нет существующих предложений';
                console.log(e);
            }
        }
    },
});