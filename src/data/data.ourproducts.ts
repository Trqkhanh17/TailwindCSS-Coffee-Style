import imgSlider1 from "../assets/LifestyleStories1.jpg";
import imgSlider2 from "../assets/LifestyleStories2.jpg";
import product1 from '../assets/more_product_1.jpg';
import product2 from '../assets/more_product_2.jpg';
import product3 from '../assets/more_product_3.jpg';
import product4 from '../assets/more_product_4.jpg';
import product5 from '../assets/more_product_5.jpg';
import product6 from '../assets/more_product_6.jpg';
import product7 from '../assets/more_product_7.jpg';
import product8 from '../assets/more_product_8.jpg';
import product9 from '../assets/more_product_9.jpg';
import product10 from '../assets/featured_mugs_product_cart_1.jpg';
import product11 from '../assets/moro_product_11.jpg';
import product12 from '../assets/more_product_12.jpg';
import product13 from '../assets/more_product_13.jpg';
import product14 from '../assets/more_product_14.jpg';
import product15 from '../assets/more_product_15.jpg';
import { productItem } from "../component/moreProduct";

type sliderItemsType = {
        image: string,
        label1: string,
        label2: string,
        note: string
    }
export type menuItems = {
        id: number,
        namePage: string,
        description: string
    }
export const menu: menuItems[] = [
        {
            id: 1,
            namePage: "All Products",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            namePage: "Coffee Mugs",
            description: "Needless to say it’s very important, content is king and people are beginning to understand that."
        },
        {
            id: 3,
            namePage: "Others",
            description: "Needless to say it’s very important, content is king and people are beginning to understand that."
        },
        {
            id: 4,
            namePage: "Premium",
            description: "However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase."
        },
        {
            id: 5,
            namePage: "Tea Mugs",
            description: "However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase."
        }

    ]
export const productItems: productItem[] = [
        {
            id: 1,
            src: product1,
            name: "Red Love Cup",
            price: 37.00,
            sale: 25.00
        },
        {
            id: 2,
            src: product2,
            name: "Black Tea Cup",
            price: 29.00,
            sale: 19.00
        },
        {
            id: 3,
            src: product3,
            name: "B&W Essentials Mug",
            price: 19.00,
            sale: null
        },
        {
            id: 4,
            src: product4,
            name: "Winter Style Mug",
            price: 25.00,
            sale: null
        },
        {
            id: 5,
            src: product5,
            name: "Ceramic Tea",
            price: 46.00,
            sale: null
        },
        {
            id: 6,
            src: product6,
            name: "No Handle Bar Cup",
            price: 34.00,
            sale: null
        },
        {
            id: 7,
            src: product7,
            name: "Espresso Cup by Mugs.co",
            price: 37.00,
            sale: null
        },
        {
            id: 8,
            src: product8,
            name: "Pink Premium Ceramic",
            price: 99.00,
            sale: null
        },
        {
            id: 9,
            src: product9,
            name: "Summer Designer Cup",
            price: 29.00,
            sale: null
        },
        {
            id: 10,
            src: product10,
            name: "Golden Designers Mug",
            price: 69.00,
            sale: 50.00
        },
        {
            id: 11,
            src: product11,
            name: "White Mug Essential",
            price: 19.00,
            sale: null
        },
        {
            id: 12,
            src: product12,
            name: "White Ceramic",
            price: 29.00,
            sale: null
        },
        {
            id: 13,
            src: product13,
            name: "Basic White Mug",
            price: 69.00,
            sale: 50.00
        },
        {
            id: 14,
            src: product14,
            name: "Aroma Art Coffee Mug",
            price: 39.00,
            sale: null
        },
        {
            id: 15,
            src: product15,
            name: "Blue Premium Mug",
            price: 99.00,
            sale: null
        },
    ];


    export const sliderItems: sliderItemsType[] = [
        {
            image: imgSlider1,
            label1: "New Article is Live",
            label2: "Health Check: why do I get a headache when I haven’t had my coffee?",
            note: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        },
        {
            image: imgSlider2,
            label1: "New Store Opened",
            label2: "We're in London",
            note: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life."
        }
    ]