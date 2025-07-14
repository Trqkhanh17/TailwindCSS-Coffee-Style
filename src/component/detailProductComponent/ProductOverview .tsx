import { useCart } from "../../store/cartContext";
import { productItem } from "../list_product";
import { useForm } from "react-hook-form";

interface productProb {
    product: productItem
}
type FormValues = {
    quantity: number;
}
const ProductOverview = (prob: productProb) => {
    const { product } = prob;
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
    return (
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
    )
}
export default ProductOverview;