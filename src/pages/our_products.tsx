import Header from "../component/header";
import { useEffect, useState } from "react";
import SubscribeUS from "../component/subscribeUS";
import Footer from "../component/footer";
import imgSlider1 from "../assets/LifestyleStories1.jpg"
import imgSlider2 from "../assets/LifestyleStories2.jpg"
import product1 from '../assets/more_product_1.jpg'
import product2 from '../assets/more_product_2.jpg'
import product3 from '../assets/more_product_3.jpg'
import product4 from '../assets/more_product_4.jpg'
import product5 from '../assets/more_product_5.jpg'
import product6 from '../assets/more_product_6.jpg'
import product7 from '../assets/more_product_7.jpg'
import product8 from '../assets/more_product_8.jpg'
import product9 from '../assets/more_product_9.jpg'
import product10 from '../assets/featured_mugs_product_cart_1.jpg'
import product11 from '../assets/moro_product_11.jpg'
import product12 from '../assets/more_product_12.jpg'
import product13 from '../assets/more_product_13.jpg'
import product14 from '../assets/more_product_14.jpg'
import product15 from '../assets/more_product_15.jpg'
import MoreProduct, { productItem } from "../component/moreProduct";
const OurProducts = () => {
    type sliderItemsType = {
        image: string,
        label1: string,
        label2: string,
        note: string
    }
    type menuItems = {
        id: number,
        namePage: string,
        description: string
    }
    const menu: menuItems[] = [
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
    const productItems: productItem[] = [
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
        {
            src: product10,
            name: "Golden Designers Mug",
            price: 69.00,
            sale: 50.00
        },
        {
            src: product11,
            name: "White Mug Essential",
            price: 19.00,
            sale: null
        },
        {
            src: product12,
            name: "White Ceramic",
            price: 29.00,
            sale: null
        },
        {
            src: product13,
            name: "Basic White Mug",
            price: 69.00,
            sale: 50.00
        },
        {
            src: product14,
            name: "Aroma Art Coffee Mug",
            price: 39.00,
            sale: null
        },
        {
            src: product15,
            name: "Blue Premium Mug",
            price: 99.00,
            sale: null
        },
    ]

    const sliderItems: sliderItemsType[] = [
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
    const coffeeMugsItems: productItem[] = [
        {
            src: product1,
            name: "Red Love Cup",
            price: 37.00,
            sale: 25.00
        },
        {
            src: product13,
            name: "Basic White Mug",
            price: 69.00,
            sale: 50.00
        },
        {
            src: product14,
            name: "Aroma Art Coffee Mug",
            price: 39.00,
            sale: null
        },
    ]
    const othersItems: productItem[] = [
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
            src: product9,
            name: "Summer Designer Cup",
            price: 29.00,
            sale: null
        },
        {
            src: product11,
            name: "White Mug Essential",
            price: 19.00,
            sale: null
        },
    ]
    const premiumItems: productItem[] = [
        {
            src: product8,
            name: "Pink Premium Ceramic",
            price: 99.00,
            sale: null
        },
        {
            src: product10,
            name: "Golden Designers Mug",
            price: 69.00,
            sale: 50.00
        },
        {
            src: product15,
            name: "Blue Premium Mug",
            price: 99.00,
            sale: null
        },
    ]
    const teaMugsItems: productItem[] = [
        {
            src: product2,
            name: "Black Tea Cup",
            price: 29.00,
            sale: 19.00
        },
        {
            src: product5,
            name: "Ceramic Tea",
            price: 46.00,
            sale: null
        },
        {
            src: product12,
            name: "White Ceramic",
            price: 29.00,
            sale: null
        },
    ]
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
                            <MoreProduct products={productItems} />
                        </div>
                    </>
                )}
                {activeMenu?.id === menu[1].id && (
                    <>
                        <div className="py-32">
                            <MoreProduct products={coffeeMugsItems} />
                        </div>
                    </>
                )}
                {activeMenu?.id === menu[2].id && (
                    <div className="py-32">
                        <MoreProduct products={othersItems} />
                    </div>
                )}
                {activeMenu?.id === menu[3].id && (
                    <div className="py-32">
                        <MoreProduct products={premiumItems} />
                    </div>
                )}
                {activeMenu?.id === menu[4].id && (
                    <div className="py-32">
                        <MoreProduct products={teaMugsItems} />
                    </div>
                )}
                <SubscribeUS />
                <Footer />
            </div>
        </>
    )
}
export default OurProducts;