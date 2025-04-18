import { useEffect, useRef, useState } from 'react';
import './App.css';
import Subheadline from './component/subheadline';

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

            <div className="featured-mugs w-[100%] xl:w-[65%] mx-auto">
              <div className="grid screen783:grid-cols-2 grid-cols-1 gap-4">
                <div className="ct-product-card">
                  <div className="h-[540px] bg-[url('./assets/featured_mugs_product_cart_2.jpg')] bg-cover bg-no-repeat bg-center">
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

            <Subheadline title={"more products"} />

            <div className="more-product w-[90%] xl:w-[65%] mx-auto">
              <div className="grid screen783:grid-cols-3 grid-cols-1 gap-4 gap-y-10">
                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_1.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>Red Love Cup</div>
                        </div>
                        <div className="bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5">
                    <div className="text-gray-900 text-2xl text-center">Golden Designers Mug</div>
                    <div className="flex justify-center items-center mt-2">
                      <div className="mr-2 text-coffee-600 text-xl">$25.00</div>
                      <div className="text-gray-500 mt-1 font-medium line-through opacity-70">$ 37.00 USD</div>
                    </div>
                  </div>
                </div>

                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_2.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5">
                    <div className="text-gray-900 text-2xl text-center">Black Tea Cup</div>
                    <div className="flex justify-center items-center mt-2">
                      <div className="mr-2 text-coffee-600 text-xl">$ 19.00 USD</div>
                      <div className="text-gray-500 mt-1 font-medium line-through opacity-70">$ 29.00 USD</div>
                    </div>
                  </div>
                </div>
                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_3.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="hidden bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5 ">
                    <div className="text-gray-900 text-2xl">B&W Essentials Mug</div>
                    <div className="text-gray-500 mt-3 font-medium">$ 19.00 USD</div>
                  </div>
                </div>

                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_4.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="hidden bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5 ">
                    <div className="text-gray-900 text-2xl">Winter Style Mug</div>
                    <div className="text-gray-500 mt-3 font-medium">$ 25.00 USD</div>
                  </div>
                </div>

                <div className="text-center ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_5.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="hidden bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5 ">
                    <div className="text-gray-900 text-2xl">Ceramic Tea</div>
                    <div className="text-gray-500 mt-3 font-medium">$ 46.00 USD</div>
                  </div>
                </div>

                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_6.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="hidden bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5 ">
                    <div className="text-gray-900 text-2xl">No Handle Bar Cup</div>
                    <div className="text-gray-500 mt-3 font-medium">$ 34.00 USD</div>
                  </div>
                </div>

                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_7.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="hidden bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5 ">
                    <div className="text-gray-900 text-2xl">Espresso Cup by Mugs.co</div>
                    <div className="text-gray-500 mt-3 font-medium">$ 25.00 USD</div>
                  </div>
                </div>

                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_8.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="hidden bg-white text-coffee-600 px-5 py-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5 ">
                    <div className="text-gray-900 text-2xl">Pink Premium Ceramic</div>
                    <div className="text-gray-500 mt-3 font-medium">$ 99.00 USD</div>
                  </div>
                </div>

                <div className="ct-product-card">
                  <div className="h-[400px] bg-[url('./assets/more_product_9.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href="#">
                      <div className="group flex justify-center items-center relative w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className="absolute bottom-7 w-[90%] h-[10%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                          <div className=''>explore mug</div>
                        </div>
                        <div className="hidden bg-white text-coffee-600 px-5 psy-3 absolute top-3 right-3 text-center font-bold">On Sale.</div>
                      </div>
                    </a>
                  </div>
                  <div className="text-center mt-5 ">
                    <div className="text-gray-900 text-2xl">Summer Designer Cup</div>
                    <div className="text-gray-500 mt-3 font-medium">$ 29.00 USD</div>
                  </div>
                </div>
              </div>
            </div>

            <Subheadline title={"Buy 2 mugs and get a coffee magazine free"} />

            <div className="coffee-magazine">Coffee Magazine</div>

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
