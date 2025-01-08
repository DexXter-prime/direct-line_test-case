import {type IPage, type IFilter, filterTypes} from "~/types";

export const menuItems = [
    {
        icon: 'heart',
        name: 'Избранное',
        link: '/favourite',
    },
    {
        icon: 'stock',
        name: 'Склад',
        link: '/stock',
    },
    {
        icon: 'bag',
        name: 'Сделки',
        link: '/bag',
    },
] as IPage[];


export const filterItems = [
    {
        title: 'Все типы',
        value: filterTypes.all,
    },
    {
        title: 'Прямые продажи',
        value: filterTypes.direct,
    },
    {
        title: 'Аукцион',
        value: filterTypes.auction,
    }
] as IFilter[];
