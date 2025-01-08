export default defineEventHandler(() => {
    return {
        offers: [
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'AUCTION',
                title: 'Дерево',
                city: 'Санкт-Петербург, Красное Село',
                seller: 'Торговый Дом ГОСТ',
                productType: 'Стройматериалы',
                description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!\n' +
                    'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !\n',
                price: 11000 ,
                quantity: 3,
                image: '/images/offer1.jpeg',
                status: 'STOCK',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'DIRECT',
                title: 'Шифер',
                city: 'Санкт-Петербург, Красное Село',
                seller: 'Торговый Дом ГОСТ',
                productType: 'Стройматериалы',
                description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!\n' +
                    'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !\n',
                price: 11000 ,
                quantity: 3,
                image: '/images/offer2.jpg',
                status: 'STOCK',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'AUCTION',
                title: 'Фанера',
                city: 'Санкт-Петербург, Красное Село',
                seller: 'Торговый Дом ГОСТ',
                productType: 'Стройматериалы',
                description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!\n' +
                    'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !\n',
                price: 11000 ,
                quantity: 3,
                image: '/images/offer3.jpg',
                status: 'BAG',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'DIRECT',
                title: 'Кирпич',
                city: 'Санкт-Петербург, Красное Село',
                seller: 'Торговый Дом ГОСТ',
                productType: 'Стройматериалы',
                description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!\n' +
                    'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !\n',
                price: 11000 ,
                quantity: 3,
                image: '/images/offer4.jpg',
                status: 'BAG',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'AUCTION',
                title: 'Цемент',
                city: 'Санкт-Петербург, Красное Село',
                seller: 'Торговый Дом ГОСТ',
                productType: 'Стройматериалы',
                description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!\n' +
                    'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !\n',
                price: 11000 ,
                quantity: 3,
                image: '/images/offer5.jpg',
                status: 'BAG',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'DIRECT',
                title: 'Трубы',
                city: 'Москва, Северо-Восточный',
                seller: 'Торговый Дом ГОСТ',
                productType: 'Стройматериалы',
                description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!\n' +
                    'Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !\n',
                price: 11000 ,
                quantity: 3,
                image: '/images/offer6.jpg',
                status: 'STOCK',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'DIRECT',
                title: 'Краски',
                city: 'Санкт-Петербург, Красное Село',
                seller: 'ХОЗ-ТОРГ',
                productType: 'Хозтовары',
                description: 'Краска — это один из самых универсальных и востребованных отделочных материалов, используемых для декоративной и защитной обработки различных поверхностей. Она не только придаёт эстетичный вид конструкциям и интерьерам, но и обеспечивает долговечность материалов, защищая их от воздействия внешних факторов. Современные краски отличаются многообразием типов, свойств и назначения, что позволяет выбрать идеальный вариант для любых строительных и ремонтных работ.',
                price: 1000 ,
                quantity: 4,
                image: '/images/offer7.jpg',
                status: 'STOCK',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'DIRECT',
                title: 'Песок',
                city: 'Санкт-Петербург, Красное Село',
                seller: 'Торговый Дом ГОСТ',
                productType: 'Стройматериалы',
                description: 'Песок — это один из самых универсальных, востребованных и незаменимых строительных материалов. Он представляет собой естественный сыпучий материал, образованный в результате разрушения горных пород под воздействием природных факторов, таких как ветер, вода и перепады температур. Благодаря своей доступности, экологичности и уникальным физическим свойствам, песок используется практически на всех этапах строительных и ремонтных работ. Песок состоит преимущественно из кварца — минерала, богатого диоксидом кремния (SiO₂). Его гранулы могут варьироваться по размеру, форме и составу, что влияет на свойства материала.',
                price: 2500 ,
                quantity: 10,
                image: '/images/offer8.jpg',
                status: 'STOCK',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'AUCTION',
                title: 'Моющие средства',
                city: 'Москва, Северо-Восточный',
                seller: 'ХОЗ-ТОРГ',
                productType: 'Хозтовары',
                description: 'Моющие средства — это ключевой элемент для поддержания чистоты и порядка в любом пространстве, будь то дом, офис, ресторан или производственное помещение. Они помогают эффективно справляться с любыми загрязнениями, обеспечивая не только визуальную чистоту, но и гигиеническую безопасность. Современные моющие средства разработаны с использованием передовых технологий, которые позволяют одновременно бережно воздействовать на поверхности и обеспечивать высокую степень очистки.\n' +
                    '\n' +
                    'Основное преимущество моющих средств заключается в их универсальности и широком спектре применения. Они подходят для борьбы с различными видами загрязнений, включая жир, пыль, пятна, ржавчину и известковый налет. Благодаря специально подобранным формулам они справляются с задачами различной сложности — от обычного удаления пыли до очистки стойких загрязнений, таких как копоть или нагар. Это делает их незаменимым инструментом в повседневной жизни.\n' +
                    '\n',
                price: 500 ,
                quantity: 5,
                image: '/images/offer9.jpg',
                status: 'STOCK',
                liked: false,
            },
            {
                id: Math.floor(Math.random() * 10000),
                offerType: 'AUCTION',
                title: 'Тряпки',
                city: 'Москва, Северо-Восточный',
                seller: 'ХОЗ-ТОРГ',
                productType: 'Хозтовары',
                description: 'Универсальные тряпки — идеальный помощник для уборки дома, офиса или автомобиля. Они выполнены из высококачественных материалов, которые обеспечивают эффективное удаление загрязнений и долговечность.',
                price: 200 ,
                quantity: 4,
                image: '/images/offer10.jpg',
                status: 'STOCK',
                liked: false,
            },
        ],
    }
});