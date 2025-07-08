import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "./cart";
import { useCart } from "../store/cartContext";

const Header = () => {
    const menuItems = [
        { label: "Home", to: "/" },
        { label: "Our Products", to: "/products" },
        { label: "Blog", to: "/blog" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
    ];

    const [isMenuOpen, SetIsMenuOpen] = useState(false);

    const [isClosing, SetIsClosing] = useState(false);
    const [isOpenCart, SetISOpenCart] = useState(false);
    const toggleMenu = () => {
        if (isMenuOpen) {
            SetIsClosing(true);
            setTimeout(() => {
                SetIsMenuOpen(false);
                SetIsClosing(false);
            }, 400);
        } else {
            SetIsMenuOpen(true);
        }
    };
    const navigate = useNavigate();

    const menuRef = useRef<HTMLDivElement>(null);
    const { cart } = useCart()

    const handleClickOutSideMenu = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            toggleMenu();
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSideMenu);

        return () => {
            document.removeEventListener("mousedown", handleClickOutSideMenu);
        }
    }, [isMenuOpen]);
    return (
        <>
            <header className="relative py-6 w-full mx-auto flex justify-center">
                <nav className="flex flex-row justify-between lg:justify-center items-center w-full lg:gap-40">
                    <div className="logo text-center text-2xl font-semibold text-textNav cursor-pointer" onClick={() => navigate("/")}>CoffeeStyle.</div>

                    {/* Desktop menu */}
                    <ul id="ct-top-menu" className="hidden lg:flex lg:items-center lg:justify-center lg:gap-8 uppercase text-center text-gray-500 font-medium">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `ct-top-menu-item ${isActive ? 'text-textNav font-bold' : ''}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Cart */}
                    <ul onClick={() => SetISOpenCart(true)} className="group flex justify-end lg:justify-start items-center uppercase text-sm text-gray-500 font-medium hover:text-gray-800">
                        <li className="ct-top-menu-item">
                            <div className="flex gap-1.5 items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ct-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span>cart</span>
                                <span className="ct-badge-circle bg-gray-500 text-white group-hover:bg-gray-800 transition-colors duration-300">
                                    {cart.length}
                                </span>
                            </div>
                        </li>
                    </ul>
                    <Cart
                        isOpenCart={isOpenCart}
                        setOpenCart={SetISOpenCart}
                    />

                    {/* Mobile toggle button */}
                    <div className="lg:hidden flex items-center cursor-pointer px-2 sm:px-4">
                        {isMenuOpen && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={toggleMenu}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                        {!isMenuOpen && (
                            <svg
                                onClick={toggleMenu}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </div>

                </nav>
                {/* Mobile menu overlay */}
                {
                    (isMenuOpen || isClosing) && (
                        <div
                            ref={menuRef}
                            className={`absolute pb-2 top-full lg:hidden left-0 w-full bg-white z-50 flex flex-col items-center gap-6 uppercase text-sm text-gray-700 font-medium ${isClosing ? 'animate-slide-up' : 'animate-slide-down'
                                }`}
                        >
                            {menuItems.map((item, index) => (
                                <ul key={index}>
                                    <li>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `ct-top-menu-item ${isActive ? 'text-coffee-600 font-bold' : ''}`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    )
                }
            </header>
        </>
    )
}
export default Header;