import { useParams } from "react-router-dom";
import Header from "../component/header";
import { productItems } from "../data/data.ourproducts";
import SubscribeUS from "../component/subscribeUS";
import Footer from "../component/footer";
import { useForm } from "react-hook-form";
import MoreProduct, { productItem } from "../component/moreProduct";
import ImgPremium from "../assets/detail_product_img.jpg"
import iConDiamond from "../assets/diamond.png";
import iConLight from "../assets/light.png"
import Subheadline from "../component/subheadline";
import { useCart } from "../store/cartContext";

type FormValues = {
    quantity: number;
}
const DetailProduct = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);
    const product: productItem | undefined = productItems.find(item => item.id === productId);
    if (!product) {
        return <div className="">ERROR</div>
    }
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: { quantity: 1 }
    });

    const { addToCart } = useCart();

    const onSubmit = (data: FormValues) => {
        const cartData = {
            id: product.id,
            src: product.src,
            name: product.name,
            price: product.price,
        }
        const cartItem = {
            ...cartData,
            quantity: data.quantity
        }
        addToCart(cartItem);
    };

    const getRandomProductSuggestions = (allProdut: productItem[], Id: number) => {
        const filtered = allProdut.filter(pro => pro.id !== Id);
        const productSuggesttions: productItem[] = [];
        while (productSuggesttions.length < 3 && filtered.length > 0) {
            const index = Math.floor(Math.random() * filtered.length);
            productSuggesttions.push(filtered[index]);
            filtered.splice(index, 1);
        }
        return productSuggesttions;
    }

    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <div className="w-full flex flex-col lg:flex-row justify-center items-center my-20 mx-auto gap-20 lg:w-[80%] xl:w-[65%]">
                    <div className=" relative h-[350px] sm:h-[450px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${product.src})` }}>
                        {product.sale && (
                            <div className="bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-5 w-full text-center lg:text-start md:w-[65%] lg:w-full">
                        <div className="w-full text-4xl">{product.name}</div>
                        <div className="text-gray-500 text-lg lg:text-start">{product.description}</div>
                        {product.sale ? (
                            <div className="flex mt-2 items-center gap-2">
                                <div className="text-coffee-600 text-3xl">$ {product.sale.toFixed(2)}</div>
                                <div className="text-gray-500 mt-1 font-medium line-through opacity-70">$ {product.price.toFixed(2)} USD</div>
                            </div>
                        ) : (
                            <div className="text-gray-500 mt-3 font-medium">$ {product.price.toFixed(2)} USD</div>
                        )
                        }
                        <div className="uppercase text-sm font-semibold tracking-widest text-gray-500">Quantity</div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row md:justify-center lg:justify-start items-center gap-5 w-full">
                            <input
                                type="number"
                                {...register("quantity", {
                                    required: "Quantity is required",
                                    min: {
                                        value: 1,
                                        message: "Quantity must be at least 1"
                                    }
                                })}
                                className="border p-2 w-full h-[60px] text-center text-sm font-bold md:w-[100px] focus:outline-none focus:border-black transition-colors duration-300 ease-in-out"
                            />
                            {errors.quantity && <span className="text-red-500 text-start w-full">*{errors.quantity.message}</span>}
                            <button type="submit" className="h-[60px] w-full md:w-[150px] text-white bg-textNav px-4 uppercase text-sm font-bold tracking-widest">
                                add to cart
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-start w-full gap-20 my-20 md:w-[65%] lg:w-[80%] xl:w-[65%] mx-auto">
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-5 w-full">
                        <div className="text-xs uppercase text-gray-500 font-bold tracking-widest">details</div>
                        <div className="text-gray-500 leading-7">{product.detail}</div>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start text-center gap-5 w-full">
                        <div className="text-xs uppercase text-gray-500 font-bold tracking-widest">Dimensions</div>
                        <ul className="w-full text-center lg:text-start lg:list-disc lg:pl-5">
                            <li><span className="text-gray-500">Lenght (In): </span>{product.dimensions.lenghtIn.toFixed(1)}</li>
                            <li><span className="text-gray-500">Height (in): </span>{product.dimensions.heghtIn.toFixed(1)}</li>
                            <li><span className="text-gray-500">Width (in): </span>{product.dimensions.widthIn.toFixed(1)}</li>
                            <li><span className="text-gray-500">Width (in): </span>{product.dimensions.weightOz.toFixed(1)}</li>
                        </ul>
                    </div>
                </div>

            </div>
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
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Subheadline title="You might also like these" />
                <div className="mb-20"><MoreProduct products={getRandomProductSuggestions(productItems, productId)} /></div>
                <SubscribeUS />
                <Footer />
            </div>
        </>

    )
}
export default DetailProduct;