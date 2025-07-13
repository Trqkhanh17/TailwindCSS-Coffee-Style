
const CompanyInfo = () => {
    return (
        <>
            <div className="bg-gray-500 w-full h-[1px] lg:w-[4px] lg:h-[500px] opacity-10 my-10"></div>
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start w-full gap-10">
                <div className="w-full flex flex-col justify-center lg:justify-start lg:items-start items-center text-center lg:text-start gap-3">
                    <div className="uppercase text-sm text-gray-500 font-bold tracking-widest">contact form</div>
                    <div className="text-xl">CoffeeStyle. Inc</div>
                    <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start text-gray-500 gap-1">
                        <div className="">Pride Ave, </div>
                        <div className="">Hamlyn Heights </div>
                        <div className="">VIC 3215</div>
                        <div className="">Australia</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center lg:justify-start text-center lg:text-start items-center lg:items-start">
                    <div className="uppercase text-gray-500 text-sm font-bold tracking-widest">call us</div>
                    <div className="text-xl">+1 (415) 555-1212</div>
                </div>
                <div className="flex flex-col justify-center lg:justify-start text-center lg:text-start items-center lg:items-start">
                    <div className="uppercase text-gray-500 text-sm font-bold tracking-widest">email us</div>
                    <div className="text-xl">khanhtranquoc44@gmail.com</div>
                </div>
            </div>
        </>
    )
}
export default CompanyInfo;