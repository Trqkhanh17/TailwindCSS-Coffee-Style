import CoffeeMagazine from "../component/homeComponent/coffee_magazine"
import FeaturedMugs from "../component/homeComponent/featuredMugs"
import Footer from "../component/footer";
import Header from "../component/header";
import LifeStyle from "../component/homeComponent/lifestyle_story";
import Parallax from "../component/parallax";
import Slider from "../component/homeComponent/slider";
import Story from "../component/homeComponent/story";
import Subheadline from "../component/subheadline";
import SubscribeUS from "../component/subscribeUS";
import Imgparallax from "../assets/home_parallax.jpg";
import { dataHomeProducts, dataImgFeatureMug, dataStories } from "../data/data.home"
import ListProduct from "../component/list_product";

const Home = () => {
    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <Slider />
                <Story />
                <Subheadline title={"Featured Mugs"} />
                <FeaturedMugs ListImg={dataImgFeatureMug} />
                <Subheadline title={"more products"} />
                <ListProduct products={dataHomeProducts} />
                <Subheadline title={"Buy 2 mugs and get a coffee magazine free"} />
                <CoffeeMagazine />
            </div>
            <Parallax img={Imgparallax} />
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Subheadline title={"Behind the mugs, lifestyle stories"} />
                <LifeStyle dataStory={dataStories} />
                <SubscribeUS />
                <Footer />
            </div >
        </>
    )
}
export default Home;