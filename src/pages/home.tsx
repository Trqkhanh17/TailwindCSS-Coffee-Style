import CoffeeMagazine from "../component/coffee_magazine"
import FeaturedMugs from "../component/featuredMugs"
import Footer from "../component/footer"
import Header from "../component/header"
import LifeStyle from "../component/lifestyle_story"
import MoreProduct from "../component/moreProduct"
import Parallax from "../component/parallax"
import Slider from "../component/slider"
import Story from "../component/story"
import Subheadline from "../component/subheadline"
import SubscribeUS from "../component/subscribeUS"

const Home = () => {
    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <Slider />
                <Story />
                <Subheadline title={"Featured Mugs"} />
                <FeaturedMugs />
                <Subheadline title={"more products"} />
                <MoreProduct />
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