
const Footer = () => {
    return (
        <div className="w-[95%] xl:w-[65%] pb-20 mx-auto flex flex-row justify-between maxScreen850:flex-col maxScreen850:items-center maxScreen850:justify-center">

            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="text-gray-900 text-xl font-bold">CoffeeStyle.</div>
                <div className="text-gray-500 text-[16px] max-w-[160px] maxScreen850:max-w-full">Delivering the best coffee life since 1996. From coffee geeks to the real ones.</div>
                <div className="text-[16px] text-gray-500 opacity-40 hover:opacity-100 hover:text-coffee-400 hover:transition-all duration-300 ease-in-out">CoffeeStyle Inc. © 1996</div>
            </div>

            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="mb-4 uppercase text-[17px] text-gray-500 font-semibold tracking-wide">menu</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">Home</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">Our Products</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">About</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">Contact</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">Styleguide</div>
            </div>
            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="mb-4 uppercase text-[17px] text-gray-500 font-semibold tracking-wide">follow us</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">Facebook</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">Instagram</div>
                <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">GitHub</div>
            </div>
            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="mb-4 uppercase text-[17px] text-gray-500 font-semibold tracking-wide">Contact Us</div>
                <div className="text-[16px] text-gray-500">We’re Always Happy to Help</div>
                <div className="text-[26px] text-gray-500 cursor-pointer maxScreen850:text-[20px] hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">khanhtranquoc44@gmail.com</div>
                <div className="text-[16px] text-gray-500 opacity-40 hover:opacity-100 hover:text-coffee-400 hover:transition-all duration-300 ease-in-out">Powered by QuocKhanhDev Author</div>
            </div>
        </div>
    )
}
export default Footer;