import {defineStore} from 'pinia';
import type {IOffer} from '~/types';

export const useOfferStore = defineStore('offers', {
    state: () => {
        return {
            offers: [] as IOffer[] | null,
            filterFlag: '',
            reqError: null,
        }
    },
    actions: {
        async fetchOffers() {
            try {
                const data = await $fetch<IOffer[]>('/api/mock-offers');
                this.offers = data;
            } catch (e: any) {
                this.reqError = e.message || 'Нет существующих предложений';
                console.log(e);
            }
        }
    },
});