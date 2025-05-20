import { NavLink } from "react-router-dom";


const Slider = () => {
    return (
        <div className="slide h-[530px] bg-[url('./assets/slider-bg.jpg')] bg-cover bg-no-repeat bg-bottom">
            <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-20">
                <div className="mx-16 text-white text-center">
                    <div className="uppercase mb-6 text-sm">Best place to buy design</div>
                    <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
                    <div className="mb-6 font-medium text-lg">The most versatile furniture syftem ever created. Designed to fit your life, made to move and grow.</div>
                    <div className="flex justify-center items-center">
                        <div className="uppercase bg-white w-max text-gray-900 tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-95">
                            <NavLink to={"/products"}>
                                Explore Our Products
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider;