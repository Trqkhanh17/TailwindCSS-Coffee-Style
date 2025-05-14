import CoffeeMagazine from "../component/coffee_magazine"
import FeaturedMugs from "../component/featuredMugs"
import Footer from "../component/footer"
import Header from "../component/header"
import LifeStyle from "../component/lifestyle_story"
import MoreProduct, { productItem } from "../component/moreProduct"
import Parallax from "../component/parallax"
import Slider from "../component/slider"
import Story from "../component/story"
import Subheadline from "../component/subheadline"
import SubscribeUS from "../component/subscribeUS"
import product1 from '../assets/more_product_1.jpg'
import product2 from '../assets/more_product_2.jpg'
import product3 from '../assets/more_product_3.jpg'
import product4 from '../assets/more_product_4.jpg'
import product5 from '../assets/more_product_5.jpg'
import product6 from '../assets/more_product_6.jpg'
import product7 from '../assets/more_product_7.jpg'
import product8 from '../assets/more_product_8.jpg'
import product9 from '../assets/more_product_9.jpg'
const Home = () => {
    const moreProducs: productItem[] = [
        {
            src: product1,
            name: "Red Love Cup",
            price: 37.00,
            sale: 25.00
        },
        {
            src: product2,
            name: "Black Tea Cup",
            price: 29.00,
            sale: 19.00
        },
        {
            src: product3,
            name: "B&W Essentials Mug",
            price: 19.00,
            sale: null
        },
        {
            src: product4,
            name: "Winter Style Mug",
            price: 25.00,
            sale: null
        },

        {
            src: product5,
            name: "Ceramic Tea",
            price: 46.00,
            sale: null
        },
        {
            src: product6,
            name: "No Handle Bar Cup",
            price: 34.00,
            sale: null
        },
        {
            src: product7,
            name: "Espresso Cup by Mugs.co",
            price: 37.00,
            sale: null
        },
        {
            src: product8,
            name: "Pink Premium Ceramic",
            price: 99.00,
            sale: null
        },
        {
            src: product9,
            name: "Summer Designer Cup",
            price: 29.00,
            sale: null
        },
    ]
    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <Slider />
                <Story />
                <Subheadline title={"Featured Mugs"} />
                <FeaturedMugs />
                <Subheadline title={"more products"} />
                <MoreProduct products={moreProducs} />
                <Subheadline title={"Buy 2 mugs and get a coffee magazine free"} />
                <CoffeeMagazine />
            </div>
            <Parallax />
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Subheadline title={"Behind the mugs, lifestyle stories"} />
                <LifeStyle />
                <SubscribeUS />
                <Footer />
            </div >
        </>
    )
}
export default Home;