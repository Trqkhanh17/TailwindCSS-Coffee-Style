

const CoffeeMagazine = () => {
    return (
        <div className="coffee-magazine w-[100%] xl:w-[65%] mx-auto mb-40 shadow-md rounded-lg overflow-hidden pb-10 screen790:pb-0">
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
    )
}
export default CoffeeMagazine;