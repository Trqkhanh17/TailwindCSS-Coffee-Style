

export interface productItem {
    src: string,
    name: string,
    price: number,
    sale: null | number
}
interface MoreProductProbs {
    products: productItem[]
}
const MoreProduct = (probs: MoreProductProbs) => {
    const { products } = probs;

    return (
        <div className="more-product w-[100%] xl:w-[65%] mx-auto">
            <div className="grid screen783:grid-cols-3 grid-cols-1 gap-4 gap-y-10">
                {products.map((item, index) => (
                    <div className="ct-product-card shadow-md rounded-lg overflow-hidden" key={index}>
                        <div className={`h-[400px] bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${item.src})` }}>
                            <a href="#">
                                <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                                    <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                                        <div className=''>explore mug</div>
                                    </div>
                                    {item.sale && (
                                        <div className="bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                                    )}
                                </div>
                            </a>
                        </div>
                        <div className="text-center mt-5">
                            <div className="text-gray-900 text-2xl text-center">{item.name}</div>
                            {item.sale ? (
                                <div className="flex justify-center items-center mt-2">
                                    <div className="mr-2 text-coffee-600 text-xl">$ {item.sale.toFixed(2)}</div>
                                    <div className="text-gray-500 mt-1 font-medium line-through opacity-70">$ {item.price.toFixed(2)} USD</div>
                                </div>
                            ) : (
                                <div className="text-gray-500 mt-3 font-medium">$ {item.price.toFixed(2)} USD</div>
                            )
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MoreProduct