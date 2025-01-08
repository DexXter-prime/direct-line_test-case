import {defineStore} from 'pinia';
import {filterTypes, offerStatus, offerTypes, type IOffer, type IStore,} from '~/types';

export const useOfferStore = defineStore('offers', {
    state: (): IStore => ({
            offers: [],
            filterFlag: filterTypes.all,
            reqError: null,
    }),
    getters: {
        stockOffers(): IOffer[] {
            return this.offers.filter(offer => offer.status === offerStatus.stockStatus);
        },

        bagOffers(): IOffer[] {
            return this.offers.filter(offer => offer.status === offerStatus.bagStatus || offer.status === offerStatus.selledStatus);
        },

        likedOffers(): IOffer[] {
            return this.offers.filter(offer => offer.liked);
        },

        filteredOffers() {
            return (pageOffers: IOffer[]) => {
                return {
                    [filterTypes.all]: pageOffers,
                    [filterTypes.direct]: pageOffers.filter(offer => offer.offerType === offerTypes.direct),
                    [filterTypes.auction]: pageOffers.filter(offer => offer.offerType === offerTypes.auction),
                }[this.filterFlag];
            }
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

        setFilterStatus(filterFlag: filterTypes) {
            this.filterFlag = filterFlag;
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