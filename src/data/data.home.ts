import product1 from '../assets/more_product_1.jpg';
import product2 from '../assets/more_product_2.jpg';
import product3 from '../assets/more_product_3.jpg';
import product4 from '../assets/more_product_4.jpg';
import product5 from '../assets/more_product_5.jpg';
import product6 from '../assets/more_product_6.jpg';
import product7 from '../assets/more_product_7.jpg';
import product8 from '../assets/more_product_8.jpg';
import product9 from '../assets/more_product_9.jpg';
import { productItem } from '../component/moreProduct'
import imgFeatureMug1 from "../assets/featured_mugs_product_cart_1.jpg"
import imgFeatureMug2 from "../assets/featured_mugs_product_cart_2.jpg"
import { imgFeatureMug } from '../component/featuredMugs'

export const dataHomeProducts: productItem[] = [
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
    ]
export const dataImgFeatureMug: imgFeatureMug[] = [
        imgFeatureMug1,
        imgFeatureMug2
    ]