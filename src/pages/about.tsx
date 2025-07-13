import Header from "../component/header";


import Footer from "../component/footer";
import SubscribeUS from "../component/subscribeUS";
import imgParallax from "../assets/about_parallax.jpg"
import Parallax from "../component/parallax";
import WrapOverlayedAbout from "../component/aboutComponent/aboutWrapOverlayed";
import WrapAbout from "../component/aboutComponent/about.wrap";
const About = () => {

    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8 mb-24">
                <Header />
                <WrapOverlayedAbout />
            </div>
            <Parallax img={imgParallax} />
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <WrapAbout />
                <div className="mt-[160px]"><SubscribeUS /></div>
                <Footer />
            </div>
        </>
    );
}

export default About;
