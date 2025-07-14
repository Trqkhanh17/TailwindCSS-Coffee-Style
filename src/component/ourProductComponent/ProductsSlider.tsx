import { motion } from "framer-motion";
import { useState } from "react";
import { sliderItems } from "../../data/data.ourproducts";

const ProductsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % sliderItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
    };
    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
                if (info.offset.x < -50) {
                    nextSlide();
                } else if (info.offset.x > 50) {
                    prevSlide();
                }
            }}
        >
            <div className="lg:w-[65%] w-full mx-auto relative py-32 overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {sliderItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row justify-center items-center md:gap-3 lg:gap-5 xl:gap-20 w-full flex-shrink-0"
                        >
                            <div
                                className="h-[350px] md:w-[350px] w-full"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-10 max-w-[400px]">
                                <div className="text-[11px] uppercase text-gray-500 font-bold tracking-widest">{item.label1}</div>
                                <div className="text-gray-900 md:text-2xl text-3xl md:text-left text-center">{item.label2}</div>
                                <div className="text-gray-500 md:text-left text-center">{item.note}</div>
                                <div className="bg-gray-900 text-white uppercase w-[50%] px-4 py-4 text-sm text-center tracking-widest cursor-pointer hover:opacity-80 hover:transition-opacity hover:duration-300 ease-in-out">
                                    Read the full story
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={prevSlide} className="absolute 2xl:top-1/2 screen375:right-1/2 2xl:left-0 2xl:-translate-x-1/2 2xl:-translate-y-1/2 screen375:translate-y-1/2 screen375:mx-9 lg:mx-0 text-gray-400 text-4xl opacity-50">
                    {"<"}
                </button>
                <button onClick={nextSlide} className="absolute 2xl:top-1/2 screen375:left-1/2 2xl:right-0 2xl:translate-x-1/2 2xl:-translate-y-1/2 screen375:translate-y-1/2 screen375:mx-9 lg:mx-0 text-gray-400 text-4xl opacity-50">
                    {">"}
                </button>
            </div>
        </motion.div>
    )
}
export default ProductsSlider;