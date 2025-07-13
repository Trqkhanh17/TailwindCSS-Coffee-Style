
import imgLatestPosts1 from "../assets/LifestyleStories1.jpg"
import imgLatestPosts2 from "../assets/LifestyleStories2.jpg"
import imgLatestPosts3 from "../assets/LifestyleStories3.jpg";
import imgLatestPosts4 from "../assets/LifestyleStories4.jpg";
import imgLatestPosts5 from "../assets/LifestyleStories5.jpg";
export interface LatestPostsItems {
    img: string,
    label1: string,
    label2: string,
    date: string,
}
export const ListLatestPosts: LatestPostsItems[] = [
        {
            img: imgLatestPosts3,
            label1: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
            label2: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts4,
            label1: "More coffee, lower death risk?",
            label2: "Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p  ",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts2,
            label1: "How long does a cup of coffee keep you awake?",
            label2: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts1,
            label1: "Health Check: why do I get a headache when I haven’t had my coffee?",
            label2: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts5,
            label1: "Will drinking coffee prolong your life?",
            label2: "Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectusz",
            date: "October 9, 2018"
        }
    ]
    interface CategoriesItem {
    to: string,
    title: string
}
export const ListCategories:CategoriesItem[] = [
    {
        to:"/About",
        title:    "Barista",
    },
    {
        to:"/About",
        title:    "Coffee",
    },    {
        to:"/About",
        title:    "Lifestyle",
    },    {
        to:"/About",
        title:    "Mugs",
    }
]