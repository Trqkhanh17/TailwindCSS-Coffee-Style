import Header from "../component/header";
import { useEffect, useState } from "react";
import SubscribeUS from "../component/subscribeUS";
import Footer from "../component/footer";
import { menu, menuItems, productItems, sliderItems } from "../data/data.ourproducts";
import MoreProduct from "../component/moreProduct";
const OurProducts = () => {
    const dataProduct = productItems;
    const coffeeMugsIds = [1, 13, 14];
    const othersIds = [3, 4, 6, 7, 9, 11];
    const premiumIds = [8, 10, 15];
    const teaMugsIds = [2, 5, 12];

    const getProductsByIds = (ids: number[]) => {
        return dataProduct.filter((product) => ids.includes(product.id))
    }
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
    };

    const [activeMenu, setActiveMenu] = useState<menuItems | null>(null);

    useEffect(() => {
        setActiveMenu(menu[0])
    }, [])
    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <div className="pt-32 flex flex-col justify-center items-center gap-12 lg:w-[65%] w-full mx-auto">
                    <div className="text-5xl w-full text-center">{activeMenu?.namePage}</div>
                    <div className="md:text-2xl text-lg text-gray-500 text-center w-full">{activeMenu?.description}</div>
                    <ul className="flex flex-col md:flex-row justify-between gap-5 w-full">
                        {menu.map((item, index) => (
                            <li className={`ct-our-menu-item ${activeMenu?.id === item.id ? "border-coffee-400 opacity-100" : "opacity-65"}`} onClick={() => setActiveMenu(item)} key={index}>
                                {item.namePage}
                            </li>
                        ))}
                    </ul>
                </div>

                {activeMenu?.id === menu[0].id && (
                    <>
                        <div className="lg:w-[65%] w-full mx-auto relative py-32">
                            <div className="flex flex-col md:flex-row justify-center items-center md:gap-3 lg:gap-5 xl:gap-20 w-full">
                                <div
                                    className="h-[350px] md:w-[350px] w-full"
                                    style={{
                                        backgroundImage: `url(${sliderItems[currentIndex].image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-10 max-w-[400px]">
                                    <div className="text-[11px] uppercase text-gray-500 font-bold tracking-widest">{sliderItems[currentIndex].label1}</div>
                                    <div className="text-gray-900 md:text-2xl text-3xl md:text-left text-center">{sliderItems[currentIndex].label2}</div>
                                    <div className="text-gray-500 md:text-left text-center">{sliderItems[currentIndex].note}</div>
                                    <div className="bg-gray-900 text-white uppercase w-[50%] px-4 py-4 text-sm text-center tracking-widest cursor-pointer hover:opacity-80 hover:transition-opacity hover:duration-300 ease-in-out">Read the full story</div>
                                </div>
                            </div>

                            <button onClick={prevSlide} className="absolute 2xl:top-1/2 screen375:right-1/2 2xl:left-0 2xl:-translate-x-1/2 2xl:-translate-y-1/2 screen375:translate-y-1/2 screen375:mx-9 lg:mx-0 text-gray-400 text-4xl opacity-50">
                                {"<"}
                            </button>
                            <button onClick={nextSlide} className="absolute 2xl:top-1/2 screen375:left-1/2 2xl:right-0 2xl:translate-x-1/2 2xl:-translate-y-1/2 screen375:translate-y-1/2 screen375:mx-9 lg:mx-0 text-gray-400 text-4xl opacity-50">
                                {">"}
                            </button>
                        </div>
                        <div className="pb-32">
                            <MoreProduct products={dataProduct} />
                        </div>
                    </>
                )}
                {activeMenu?.id === menu[1].id && (
                    <>
                        <div className="py-32">
                            <MoreProduct products={getProductsByIds(coffeeMugsIds)} />
                        </div>
                    </>
                )}
                {activeMenu?.id === menu[2].id && (
                    <div className="py-32">
                        <MoreProduct products={getProductsByIds(othersIds)} />
                    </div>
                )}
                {activeMenu?.id === menu[3].id && (
                    <div className="py-32">
                        <MoreProduct products={getProductsByIds(premiumIds)} />
                    </div>
                )}
                {activeMenu?.id === menu[4].id && (
                    <div className="py-32">
                        <MoreProduct products={getProductsByIds(teaMugsIds)} />
                    </div>
                )}
                <SubscribeUS />
                <Footer />
            </div>
        </>
    )
}
export default OurProducts;