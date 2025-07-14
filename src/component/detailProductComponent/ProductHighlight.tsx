import ImgPremium from "../../assets/detail_product_img.jpg"
import iConDiamond from "../../assets/diamond.png";
import iConLight from "../../assets/light.png"
const ProductHighlight = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:h-[450px]">
            <div className="w-full h-[400px] lg:h-full bg-cover bg-center" style={{ backgroundImage: `url(${ImgPremium})` }}></div>
            <div className="w-full flex flex-col justify-center items-center text-center lg:text-start lg:px-20 bg-[#1D1F2E] text-white py-20 gap-10 h-full">
                <div className="w-full flex flex-col justify-center items-center lg:items-start gap-2">
                    <div className="text-2xl font-semibold"><span className="font-normal">Handmade by </span> CoffeeStyle.</div>
                    <div className="text-base font-semibold opacity-70">The most versatile furniture system ever created. Designed to fit your life. </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-start w-full gap-4">
                    <img src={iConDiamond} alt="icon Diamond" className="h-[30px] w-[30px]" />
                    <div className="flex flex-col w-full justify-center lg:items-start lg:justify-start">
                        <div className="lg:text-lg">Premium Quality</div>
                        <div className="opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-start w-full gap-4">
                    <img src={iConLight} alt="icon Light" className="h-[30px] w-[30px]" />
                    <div className="flex flex-col w-full justify-center lg:items-start lg:justify-start">
                        <div className="lg:text-lg">Gentle to the Environment</div>
                        <div className="opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductHighlight;