
// enums
export enum offerStatus {
    bagStatus = 'BAG',
    stockStatus = 'STOCK',
    selledStatus = 'SELLED',
}

// interfaces
export interface IPage {
    icon: string,
    name: string,
    link: string,
}

export interface IFilter {
    title: string,
    value: string,
}

export interface IOffer {
    id: number,
    offerType: string,
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
