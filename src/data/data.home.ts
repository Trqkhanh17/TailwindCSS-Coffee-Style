import product1 from '../assets/more_product_1.jpg';
import product2 from '../assets/more_product_2.jpg';
import product3 from '../assets/more_product_3.jpg';
import product4 from '../assets/more_product_4.jpg';
import product5 from '../assets/more_product_5.jpg';
import product6 from '../assets/more_product_6.jpg';
import product7 from '../assets/more_product_7.jpg';
import product8 from '../assets/more_product_8.jpg';
import product9 from '../assets/more_product_9.jpg';
import { productItem } from '../component/list_product'
import imgFeatureMug1 from "../assets/featured_mugs_product_cart_1.jpg"
import imgFeatureMug2 from "../assets/featured_mugs_product_cart_2.jpg"
import { imgFeatureMug } from '../component/homeComponent/featuredMugs'
import img1 from "../assets/LifestyleStories1.jpg"
import img2 from "../assets/LifestyleStories2.jpg"
import img3 from "../assets/LifestyleStories3.jpg"
import { storiesItem } from '../component/homeComponent/lifestyle_story';
export const dataHomeProducts: productItem[] = [
    {
        id: 1,
        src: product1,
        name: "Red Love Cup",
        price: 37.00,
        sale: 25.00,
        description: "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 2,
        src: product2,
        name: "Black Tea Cup",
        price: 29.00,
        sale: 19.00,
        description: "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 3,
        src: product3,
        name: "B&W Essentials Mug",
        price: 19.00,
        sale: null,
        description: "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 4,
        src: product4,
        name: "Winter Style Mug",
        price: 25.00,
        sale: null,
        description: "Ducimus est ut neque sunt eum iusto. Consequatur quia.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 5,
        src: product5,
        name: "Ceramic Tea",
        price: 46.00,
        sale: null,
        description: "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 6,
        src: product6,
        name: "No Handle Bar Cup",
        price: 34.00,
        sale: null,
        description: "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 7,
        src: product7,
        name: "Espresso Cup by Mugs.co",
        price: 37.00,
        sale: null,
        description: "A et quia qui quia. Sunt tempore est sit facilis.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 8,
        src: product8,
        name: "Pink Premium Ceramic",
        price: 99.00,
        sale: null,
        description: "A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    },
    {
        id: 9,
        src: product9,
        name: "Summer Designer Cup",
        price: 29.00,
        sale: null,
        description: "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
        detail: "No details available.",
        dimensions: { lenghtIn: 0, heghtIn: 0, widthIn: 0, weightOz: 0 }
    }
];

export const dataImgFeatureMug: imgFeatureMug[] = [
        imgFeatureMug1,
        imgFeatureMug2
    ]
       
export const dataStories: storiesItem[] = [
        {
            image: img1,
            title: "Health Check: why do I get a headache when I haven’t had my coffee?",
            description: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "April 27, 2025",
        },
        {
            image: img2,
            title: "How long does a cup of coffee keep you awake?",
            description: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
            date: "April 27, 2025",
        },
        {
            image: img3,
            title: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
            description: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "April 27, 2025",
        }
    ];