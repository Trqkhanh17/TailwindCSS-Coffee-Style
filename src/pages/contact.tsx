import Header from "../component/header";


import SubscribeUS from "../component/subscribeUS";


import Footer from "../component/footer";
import ContentContact from "../component/contactComponent/contentContact";

const Contact = () => {

    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
            </div>
            <ContentContact />
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <SubscribeUS />
                <Footer />
            </div>
        </>
    )
}
export default Contact;