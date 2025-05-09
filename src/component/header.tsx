import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const menuItems = [
        { label: "Home", to: "/" },
        { label: "Our Products", to: "/products" },
        { label: "Blog", to: "/blog" },
        { label: "Contact", to: "/contact" },
        { label: "StyleGuide", to: "/styleguide" },
    ];

    const [isMenuOpen, SetIsMenuOpen] = useState(false);

    const [isClosing, SetIsClosing] = useState(false);

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

    const headerRef = useRef<HTMLDivElement | null>(null);

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {

        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }

    }, []);
    return (

        <header className="py-6 mx-10" ref={headerRef}>
            <nav className="flex flex-row justify-between items-center">
                <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer animate-bounce">CoffeeStyle</div>

                {/* Desktop menu */}
                <ul id="ct-top-menu" className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium">
                    {menuItems.map((item, index) => (
                        <li className="ct-top-menu-item" key={index}>
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                {/* Cart */}
                <ul className="group basis-3/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium hover:text-gray-800">
                    <li className="ct-top-menu-item">
                        <a href="#" className="flex gap-1.5 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ct-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <span>cart</span>
                            <span className="ct-badge-circle bg-gray-500 text-white group-hover:bg-gray-800 transition-colors duration-300">
                                0
                            </span>
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle button */}
                <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-4">
                    <svg id="ct-toggle-top-menu-icon" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
            {/* Mobile menu overlay */}
            {
                (isMenuOpen || isClosing) && (
                    <div
                        className={`absolute lg:hidden left-0 w-full bg-white z-50 flex flex-col items-center gap-6 uppercase text-sm text-gray-700 font-medium ${isClosing ? 'animate-slide-up' : 'animate-slide-down'
                            }`}
                        style={{ top: `${headerHeight - 21}px` }}
                    >
                        {menuItems.map((item, index) => (
                            <a href="#" key={index} className="ct-top-menu-item">
                                {item.label}
                            </a>
                        ))}
                    </div>
                )
            }
        </header>

    )
}
export default Header;