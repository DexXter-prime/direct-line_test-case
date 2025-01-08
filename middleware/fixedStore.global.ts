import {filterTypes} from "~/types";

export default defineNuxtRouteMiddleware((to, from) => {
   const offerStore = useOfferStore();

   offerStore.setFilterStatus(filterTypes.all);
})