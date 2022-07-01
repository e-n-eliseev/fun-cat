import uniqid from "uniqid";
import cloneDeep from "lodash/cloneDeep";
import { SELECT_ITEM } from "./types";
import photo from "../assets/Photo.png"
import photo3x from "../assets/Photo@3x.png";

const initialState = [
    {
        id: uniqid(),
        description: ["Сказочное заморское яство", "Котэ не одобряет?"],
        heading: "Нямушка",
        nutrients: "с фуа-гра",
        additional: "Печень утки разварная с артишоками.",
        units: [
            {
                quantity: 10,
                dimensions: "порций"
            },
            {
                quantity: null,
                dimensions: "мышь в подарок"
            }
        ],
        photo: {
            img: photo,
            alt: "Фото кота",
            img3x: photo3x
        },
        weight: {
            weight: 0.5,
            units: "кг"
        },
        isSelected: false,
        isDisabled: false
    },
    {
        id: uniqid(),
        description: ["Сказочное заморское яство", "Котэ не одобряет?"],
        heading: "Нямушка",
        nutrients: "с рыбой",
        additional: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        units: [
            {
                quantity: 40,
                dimensions: "порций"
            },
            {
                quantity: 2,
                dimensions: "мыши в подарок"
            }
        ],
        photo: {
            img: photo,
            alt: "Фото кота",
            img3x: photo3x
        },
        weight: {
            weight: 2,
            units: "кг"
        },
        isSelected: false,
        isDisabled: false
    },
    {
        id: uniqid(),
        description: ["Сказочное заморское яство", "Котэ не одобряет?"],
        heading: "Нямушка",
        nutrients: "с курой",
        additional: "Филе из цыплят с трюфелями в бульоне.",
        units: [
            {
                quantity: 100,
                dimensions: "порций"
            },
            {
                quantity: 5,
                dimensions: "мышей в подарок"
            },
            {
                quantity: null,
                dimensions: "заказчик доволен"
            }
        ],
        photo: {
            img: photo,
            alt: "Фото кота",
            img3x: photo3x
        },
        weight: {
            weight: 5,
            units: "кг"
        },
        isSelected: false,
        isDisabled: true
    }
];

const rootReducer = (state = initialState, { type, id }) => {
    switch (type) {
        case SELECT_ITEM: {
            const copy = cloneDeep(state);
            const unit = copy.findIndex(item => item.id === id);
            if (!copy[unit].isDisabled) copy[unit].isSelected = !copy[unit].isSelected
            return copy;
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;