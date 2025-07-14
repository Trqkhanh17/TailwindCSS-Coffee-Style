import Header from "../component/header";
import { useEffect, useState } from "react";
import SubscribeUS from "../component/subscribeUS";
import Footer from "../component/footer";
import { menu, menuItems } from "../data/data.ourproducts";
import ProductsHeader from "../component/ourProductComponent/ProductsHeader";
import ProductListSection from "../component/ourProductComponent/ProductListSection";
const OurProducts = () => {
    const [activeMenu, setActiveMenu] = useState<menuItems | null>(null);
    useEffect(() => {
        setActiveMenu(menu[0])
    }, [])
    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <ProductsHeader activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <ProductListSection activeMenu={activeMenu} />
                <SubscribeUS />
                <Footer />
            </div>
        </>
    )
}
export default OurProducts;