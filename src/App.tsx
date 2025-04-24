import { useEffect, useRef, useState } from 'react';
import './App.css';
import Subheadline from './component/subheadline';
import MoreProduct from './component/moreProduct';
import FeaturedMugs from './component/featuredMugs';

function App() {
  const menuItems = ["Home", "Our Products", "Blog", "Contact", "StyleGuide"];
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const [isClosing, SetIsClosing] = useState(false);
  // hàm xử lí đóng hoặc mở menu mobile
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
    <>
      <div className="root">
        <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
          <header className="py-6 mx-10" ref={headerRef}>
            <nav className="flex flex-row justify-between items-center">
              <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer animate-bounce">CoffeeStyle</div>

              {/* Desktop menu */}
              <ul id="ct-top-menu" className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium">
                {menuItems.map((item, index) => (
                  <li className="ct-top-menu-item" key={index}>
                    <a href="#">{item}</a>
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
          </header>

          {/* Mobile menu overlay */}
          {(isMenuOpen || isClosing) && (
            <div
              className={`absolute lg:hidden left-0 w-full bg-white z-50 flex flex-col items-center gap-6 uppercase text-sm text-gray-700 font-medium ${isClosing ? 'animate-slide-up' : 'animate-slide-down'
                }`}
              style={{ top: `${headerHeight - 21}px` }}
            >
              {menuItems.map((item, index) => (
                <a href="#" key={index} className="ct-top-menu-item">
                  {item}
                </a>
              ))}
            </div>
          )}

          {/* Main Content */}
          <main className="">
            <div className="slide h-[530px] bg-[url('./assets/slider-bg.jpg')] bg-cover bg-no-repeat bg-bottom">
              <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-20">
                <div className="mx-16 text-white text-center">
                  <div className="uppercase mb-6 text-sm">Best place to buy design</div>
                  <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
                  <div className="mb-6 font-medium text-lg">The most versatile furniture syftem ever created. Designed to fit your life, made to move and grow.</div>
                  <div className="flex justify-center items-center">
                    <div className="uppercase bg-white w-max text-gray-900 tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-95">explore our products</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="story">
              <div className="w-full h-full flex flex-col justify-center items-center ">
                <div className="px-3 md:px-32 lg:px-64 xl:px-96 text-3xl leading-10 py-5 mt-20 text-center">Even the all-powerful Pointing has no control about the blind texts.</div>
                <div className="text-base leading-7 text-center text-gray-500 px-12 mb-6">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br /> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                <div className=""><a className=' text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400' href="#">Read the full Story</a></div>
              </div>
            </div>

            <Subheadline title={"Featured Mugs"} />
            <FeaturedMugs />

            <Subheadline title={"more products"} />

            <MoreProduct />

            <Subheadline title={"Buy 2 mugs and get a coffee magazine free"} />

            <div className="coffee-magazine w-[100%] xl:w-[65%] mx-auto mb-40">
              <div className="flex sm790:flex-col flex-row justify-center h-[300px] sm790:h-auto gap-3 sm790:gap-20 items-center">
                <div className="w-[50%] sm790:w-full flex flex-col justify-start gap-5 sm790:text-center sm790:justify-center sm790:items-center sm790:order-2">
                  <div className="w-full text-gray-600 font-bold uppercase text-sm pl-10 sm790:pl-0">Premium Offer</div>
                  <div className="w-full text-black text-3xl pl-10 sm790:pl-0">Get our Coffee Magazine</div>
                  <div className="w-full text-gray-600 text-sm font-medium pl-10 sm790:pl-0">The most versatile furniture system ever created.<br /> Designed to fit your life.</div>
                  <div className="cursor-pointer bg-gray-900 w-[40%] max-w-[40%] py-4 ml-10 sm790:ml-0 text-white uppercase text-center text-[12px] font-bold tracking-widest hover:opacity-80">start shopping</div>
                </div>

                <div className="w-[50%] sm790:w-[80%] flex gap-4 h-[300px] sm790:order-1 sm790:flex-col sm790:h-[300px] sm790:justify-center sm790:items-center">
                  <div className="bg-[url('./assets/coffee_magazine1.jpg')] bg-cover bg-center w-[70%] sm790:w-full sm790:h-[60%]"></div>

                  <div className="flex flex-col sm790:flex-row w-[30%] gap-5 sm790:h-[40%] sm790:w-full">
                    <div className="bg-[url('./assets/coffee_magazine2.jpg')] bg-cover bg-center w-full h-full"></div>
                    <div className="bg-[url('./assets/coffee_magazine3.jpg')] bg-cover bg-center w-full h-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ct-parallax bg-[url('./assets/Parallax.jpg')] bg-cover bg-center w-[100vw] left-[calc(-50vw+50%)] relative h-96 bg-fixed"></div>

            <Subheadline title={"Behind the mugs, lifestyle stories"} />
            <div className="lifestyle-story">LifeStyle Story</div>
            <div className="subscribe-us">Subscribe Us</div>
          </main>

          <footer className="py-8 text-center bg-slate-300">footer</footer>
        </div>
      </div>
    </>
  );
}

export default App;
