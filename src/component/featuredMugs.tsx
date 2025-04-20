

const FeaturedMugs = () => {
    return (
        <div className="featured-mugs w-[100%] xl:w-[65%] mx-auto">
            <div className="grid screen783:grid-cols-2 grid-cols-1 gap-4">
                <div className="ct-product-card">
                    <div className={`h-[540px] bg-[url('./assets/featured_mugs_product_cart_2.jpg')] bg-cover bg-no-repeat bg-center`}>
                        <a href="#">
                            <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                                <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                                    <div className=''>explore mug</div>
                                </div>
                                <div className="bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                            </div>
                        </a>
                    </div>
                    <div className="text-center mt-10 ">
                        <div className="text-gray-900 text-2xl">Pink Premium Ceramic</div>
                        <div className="text-gray-500 mt-3 font-medium">$ 99.00 USD</div>
                    </div>
                </div>

                <div className="ct-product-card">
                    <div className="h-[540px] bg-[url('./assets/featured_mugs_product_cart_1.jpg')] bg-cover bg-no-repeat bg-center">
                        <a href="#">
                            <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                                <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                                    <div className=''>explore mug</div>
                                </div>
                                <div className="bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                            </div>
                        </a>
                    </div>
                    <div className="mt-10">
                        <div className="text-gray-900 text-2xl text-center">Golden Designers Mug</div>
                        <div className="flex justify-center items-center mt-2">
                            <div className="mr-2 text-coffee-600 text-xl">$ 50.00</div>
                            <div className="text-gray-500 mt-1 font-medium line-through opacity-70">$ 69.00 USD</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FeaturedMugs;