import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export interface productItem {
    id: number,
    src: string,
    name: string,
    price: number,
    sale: null | number,
    description: string,
    detail: string,
    dimensions: {
        lenghtIn: number,
        heghtIn: number,
        widthIn: number,
        weightOz: number
    }
}
interface MoreProductProbs {
    products: productItem[]
}
const ListProduct = (probs: MoreProductProbs) => {
    const { products } = probs;
    const navigate = useNavigate();
    return (
        <div className="more-product w-[100%] xl:w-[65%] mx-auto">
            <div className="grid screen783:grid-cols-3 grid-cols-1 gap-4 gap-y-10">
                {products.map((item) => (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        key={item.id}
                    >
                        <div className="ct-product-card shadow-md rounded-lg overflow-hidden" key={item.id} onClick={() => navigate(`/products/${item.id}`)}>
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
                    </motion.div>

                ))}
            </div>
        </div>
    )
}
export default ListProduct;