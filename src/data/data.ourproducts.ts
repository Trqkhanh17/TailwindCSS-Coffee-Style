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
import { productItem } from "../component/list_product";

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
            sale: 25.00,
            description:"Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",
            detail:"Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
            dimensions:{
                lenghtIn:56,
                heghtIn:30,
                widthIn:12,
                weightOz:12
            }
        },
        {
            id: 2,
            src: product2,
            name: "Black Tea Cup",
            price: 29.00,
            sale: 19.00,
            description:"Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
            detail:"Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
            dimensions:{
                lenghtIn:20,
                heghtIn:40,
                widthIn:30,
                weightOz:500
            }
        },
        {
            id: 3,
            src: product3,
            name: "B&W Essentials Mug",
            price: 19.00,
            sale: null,
            description:"Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.",
            detail:"Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
            dimensions:{
                lenghtIn:300,
                heghtIn:200,
                widthIn:200,
                weightOz:40
            }
        },
        {
            id: 4,
            src: product4,
            name: "Winter Style Mug",
            price: 25.00,
            sale: null,
            description:"Ducimus est ut neque sunt eum iusto. Consequatur quia.",
            detail:"Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
            dimensions:{
                lenghtIn:10,
                heghtIn:10,
                widthIn:10,
                weightOz:5
            }
        },
        {
        id: 5,
        src: product5,
        name: "Ceramic Tea",
        price: 46.00,
        sale: null,
        description: "Id cupiditate cum sequi eum neque dolorem dicta.",
        detail: "Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 20, heghtIn: 30, widthIn: 25, weightOz: 10 }
    },
    {
        id: 6,
        src: product6,
        name: "No Handle Bar Cup",
        price: 34.00,
        sale: null,
        description: "Amet suscipit omnis eum necessitatibus quos doloribus.",
        detail: "Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 12, heghtIn: 13, widthIn: 25, weightOz: 100 }
    },
    {
        id: 7,
        src: product7,
        name: "Espresso Cup by Mugs.co",
        price: 37.00,
        sale: null,
        description: "A et quia qui quia. Sunt tempore est sit facilis.",
        detail: "Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 10, heghtIn: 10, widthIn: 10, weightOz: 3 }
    },
    {
        id: 8,
        src: product8,
        name: "Pink Premium Ceramic",
        price: 99.00,
        sale: null,
        description: "A et quia qui quia. Sunt tempore est sit facilis.",
        detail: "Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 45, heghtIn: 98, widthIn: 56, weightOz: 200 }
    },
    {
        id: 9,
        src: product9,
        name: "Summer Designer Cup",
        price: 29.00,
        sale: null,
        description: "Amet suscipit omnis eum necessitatibus quos doloribus.",
        detail: "A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 8, heghtIn: 6, widthIn: 5, weightOz: 2 }
    },
    {
        id: 10,
        src: product10,
        name: "Golden Designers Mug",
        price: 69.00,
        sale: 50.00,
        description: "The most versatile furniture system ever created.",
        detail: "Y'all ready for this? Get your 30oz powder coated tumblers laser etched with our limited edition designs! Stainless Steel Tumblers retain Heat & Cold - not like those junk plastic ones you see elsewhere. The tumbler is double wall vacuum insulated with a 24 hour retention ratingHolds a MASSIVE 30 ounces of hot or cold liquids! Tumbler and Lid are BPA Free - Drink in good health!",
        dimensions: { lenghtIn: 12, heghtIn: 10, widthIn: 20, weightOz: 23 }
    },
    {
        id: 11,
        src: product11,
        name: "White Mug Essential",
        price: 19.00,
        sale: null,
        description: "Ducimus est ut neque sunt eum iusto.",
        detail: "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 14, heghtIn: 13, widthIn: 20, weightOz: 26 }
    },
    {
        id: 12,
        src: product12,
        name: "White Ceramic",
        price: 29.00,
        sale: null,
        description: "Sunt tempore est sit facilis.",
        detail: "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 7, heghtIn: 8, widthIn: 9, weightOz: 25 }
    },
    {
        id: 13,
        src: product13,
        name: "Basic White Mug",
        price: 69.00,
        sale: 50.00,
        description: "Sunt tempore est sit facilis.",
        detail: "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 30, heghtIn: 30, widthIn: 30, weightOz: 24 }
    },
    {
        id: 14,
        src: product14,
        name: "Aroma Art Coffee Mug",
        price: 39.00,
        sale: null,
        description: "Three local Czech style brews available.",
        detail: 'Three local "Czech" style brews available - a lager, a dark and a red (which is a mixture of the other two). The red was my pick of the three. The Golden Mug is a bit of a barn on a reasonably busy street in Dighomi, but has views over the river ... and what looks like a beer garden for warmer weather. The food was standard Georgian fare - okay, but nothing too adventerous - and too much of it fried for my taste. However, the beer makes the trip worthwhile.',
        dimensions: { lenghtIn: 15, heghtIn: 13, widthIn: 12, weightOz: 8 }
    },
    {
        id: 15,
        src: product15,
        name: "Blue Premium Mug",
        price: 99.00,
        sale: null,
        description: "Amet suscipit omnis eum necessitatibus quos doloribus.",
        detail: "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        dimensions: { lenghtIn: 99, heghtIn: 88, widthIn: 90, weightOz: 523 }
    }
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