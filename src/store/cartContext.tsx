import { createContext, ReactNode, useContext, useState } from "react"

export interface CartItem {
    id: number,
    src: string,
    name: string,
    price: number,
    quantity: number
}
interface CartContextType {
    cart: CartItem[],
    addToCart: (item: CartItem) => void,
    removeCart: (item: CartItem) => void
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart(prev => {
            const exist = prev.find(p => p.id === item.id);
            if (exist) {
                return prev.map(p =>
                    p.id === item.id ? { ...p, quantity: Number(p.quantity) + Number(item.quantity) } : p
                );
            }
            return [...prev, item];
        });
    };
    const removeCart = (product: CartItem) => {
        const newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};