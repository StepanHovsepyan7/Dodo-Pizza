import { connect } from "http2"

export const categories = [
    {
        name: 'Пиццы'
    },
    {
        name: 'Завтрак'
    },
    {
        name: 'Закуски'
    },
    {
        name: 'Коктейли'
    },
    {
        name: 'Напитки'
    },
]

export const ingredients = [

    {
        name: 'Сырный бортик',
        price: 179,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
        name: 'Шампиньоны',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
        name: 'Бекон',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    },
    {
        name: 'Ветчина',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    },
    {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
        name: 'Острая чоризо',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
        name: 'Свежие томаты',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
        name: 'Красный лук',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
        name: 'Сочные ананасы',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
        name: 'Итальянские травы',
        price: 39,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
        name: 'Сладкий перец',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
        name: 'Митболы',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
    {
        name: 'Пепперони фреш',
        imageUrl:
            'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        ingredients: {
            connect: ingredients.slice(0, 5).map(i => ({ id: i.id })),
        },
        categoryId: 2,

    },
    {
        name: 'Сырная',
        imageUrl:
            'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 2,


    },
    {
        name: 'Чоризо фреш',
        imageUrl:
            'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 2

    },


    {
        name: 'Americano',
        imageUrl:
            './americano.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 4

    },


    {
        name: 'Beef Suya Pocket',
        imageUrl:
            './beefsuyapocket.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 3

    },


    {
        name: 'Chicken Suya',
        imageUrl:
            './chickenSuya.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 3

    },

    {
        name: 'Coca Cola',
        imageUrl:
            './cocacola.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 5
    },


    {
        name: 'Dodo BBG ',
        imageUrl:
            './dodoBBQ.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 2
    },


    {
        name: 'Fanta',
        imageUrl:
            './fanta.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 5
    },


    {
        name: 'Margherita',
        imageUrl:
            './margherita.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 2

    },


    {
        name: 'Monster Energy Drink Ultra',
        imageUrl:
            './monsterenergydrinkultra.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 5
    },


    {
        name: 'Sprite',
        imageUrl:
            './sprite.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 5
    },


    {
        name: 'Suya Chicken Wings',
        imageUrl:
            './suyachickenwings.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 2
    },


    {
        name: 'Chicken Mushroom Pasta',
        imageUrl:
            '/chickenmushroompasta.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 3
    },

    {
        name: 'Sausage Pasta',
        imageUrl:
        './sausagemushroompasta.avif',
        ingredients: {
            connect: ingredients.slice(10, 40).map(i => ({ id: i.id })),
        },
        categoryId: 3
    },

]