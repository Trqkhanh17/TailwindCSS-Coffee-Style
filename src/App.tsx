import './App.css'

function App() {

  return (
    <>
      <div className='root'>
        <div className="content-wrapper max-w-[1536px] text-base mx-auto px-8 bg-slate-200">
          <header className='py-6 mx-10'>
            <nav className='flex flex-row justify-between items-center'>
              <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">CoffeeStyle</div>
              <ul className='basis-3/6 flex items-center justify-end gap-8 uppercase text-sm text-gray-500 font-medium'>
                <li className='ct-top-menu-item'>
                  <a href="#">Home</a>
                </li>
                <li className='ct-top-menu-item'>
                  <a href="#">Our Products</a>
                </li>
                <li className='ct-top-menu-item'>
                  <a href="#">Blog</a>
                </li>
                <li className='ct-top-menu-item'>
                  <a href="#">Contact</a>
                </li>
                <li className='ct-top-menu-item'>
                  <a href="#">StyleGuide</a>
                </li>
              </ul>
              <ul className="group basis-1/6 flex justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium hover:text-gray-800">
                <li className='ct-top-menu-item'>
                  <a href="#" className='flex gap-1.5 items-center justify-center'>
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
            </nav>
          </header>
          <main>
            <div className="slide">Slider</div>
            <div className="story">Story</div>
            <div className="featured-mugs">Featured Mugs</div>
            <div className="more-product"> Product</div>
            <div className="coffee-magazine">Coffee Magazine</div>
            <div className="lifestyle-story">lifeStyle Story</div>
            <div className="subscribe-us">Subscribe Us</div>
          </main>
          <footer>footer</footer>
        </div>
      </div>
    </>
  )
}

export default App
