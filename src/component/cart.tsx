import { useEffect, useRef, useState } from "react";
import emptyCartIcon from "../assets/emptyCart.png"
import { useCart } from "../store/cartContext";
import { motion, AnimatePresence } from "framer-motion";
interface CartProps {
    isOpenCart: boolean;
    setOpenCart: (open: boolean) => void;
}

const Cart = ({ isOpenCart, setOpenCart }: CartProps) => {
    const [isOnclickCheckOut, SetisOnclickCheckOut] = useState(false)
    const cartRef = useRef<HTMLDivElement>(null);
    const { cart, removeCart } = useCart();
    const handleClickOutSideCart = (event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
            setOpenCart(false);
        }
    }
    const Subtotal = () => {
        return cart.reduce((sum, item) => {
            return sum + (item.price * item.quantity)
        }, 0)
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSideCart);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSideCart);
        }
    }, []);

    return (
        <AnimatePresence>
            {isOpenCart && (
                <>

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        ref={cartRef}
                        className="fixed top-0 right-0 h-screen w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-textNav z-50 flex flex-col mx-auto"
                    >

                        <div className="p-5 flex justify-between items-center border-b shrink-0">
                            <h2 className="text-gray-400 text-sm font-bold uppercase tracking-widest">Your Cart</h2>
                            <button onClick={() => setOpenCart(false)} className="text-white text-2xl">
                                &times;
                            </button>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex-1 w-full flex flex-col justify-center items-center animate-pulse">
                                <img src={emptyCartIcon} alt="img empty" className="w-[30%]" />
                                <div className="text-center lg:text-xl text-gray-500 font-bold tracking-wider">Your cart is empty!</div>
                            </div>
                        ) : (
                            <>

                                <div className="flex-1 w-full overflow-y-auto mt-5 px-5 flex flex-col gap-5">
                                    {cart.map((item) => (
                                        <div className="flex w-full items-center gap-5" key={item.id}>
                                            <div
                                                className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] bg-cover bg-center shrink-0"
                                                style={{ backgroundImage: `url(${item.src})` }}
                                            ></div>

                                            <div className="flex flex-col flex-1 text-white">
                                                <div className="text-base font-bold break-words">{item.name}</div>
                                                <div className="font-semibold">$ {item.price.toFixed(2)} USD</div>
                                                <div className="uppercase text-sm font-bold opacity-50 cursor-pointer" onClick={() => removeCart(item)}>remove</div>
                                            </div>

                                            <div className="border border-gray-500 text-white px-7 py-2 shrink-0">
                                                {item.quantity}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full flex flex-col justify-center items-center gap-5 p-5 border-t shrink-0">
                                    <div className="w-full flex justify-between items-center text-white">
                                        <div className="font-semibold text-lg">Subtotal</div>
                                        <div className="font-semibold text-lg">$ {Subtotal() ? Subtotal().toFixed(2) : 0} USD</div>
                                    </div>
                                    <div
                                        className="py-4 cursor-pointer uppercase w-full text-center text-gray-900 bg-white text-sm font-bold tracking-widest"
                                        onClick={() => SetisOnclickCheckOut(true)}
                                    >
                                        Continue to Checkout
                                    </div>
                                    {isOnclickCheckOut && (
                                        <div className="w-full bg-amber-600 text-md p-2 text-center">
                                            Checkout is disabled on this site.
                                        </div>
                                    )}
                                </div>

                            </>
                        )}
                    </motion.div>
                    <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpenCart(false)}></div>
                </>
            )}
        </AnimatePresence>
    );
}
export default Cart;
