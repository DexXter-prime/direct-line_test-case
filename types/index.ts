
// enums
export enum offerStatus {
    bagStatus = 'BAG',
    stockStatus = 'STOCK',
    selledStatus = 'SELLED',
}

export enum offerTypes {
    direct = 'DIRECT',
    auction = 'AUCTION',
}

export enum filterTypes {
    all = 'ALL-SALES',
    direct = 'DIRECT-SALES',
    auction = 'AUCTION-SALES',
}

// interfaces
export interface IPage {
    icon: string,
    name: string,
    link: string,
}

export interface IFilter {
    title: string,
    value: filterTypes,
}

export interface IOffer {
    id: number,
    offerType: offerTypes,
    title: string,
    city: string,
    seller: string,
    productType: string,
    description: string,
    price: number ,
    quantity: number,
    image: string,
    status: offerStatus,
    liked: boolean,
}

export interface IStore {
    offers: IOffer[],
    filterFlag: filterTypes,
    reqError: null,
}
