import type { IPage, IFilter } from "~/types";

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
        value: 'all',
    },
    {
        title: 'Прямые продажи',
        value: 'direct-sales',
    },
    {
        title: 'Аукцион',
        value: 'auction',
    }
] as IFilter[];
