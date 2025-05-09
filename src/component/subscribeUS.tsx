

const SubscribeUS = () => {
    return (
        <div className="ct-subscribe-us bg-[#1D1F2E] w-full h-72 flex flex-col items-center justify-center gap-4 screen900:w-[100vw] screen900:left-[calc(-50vw+50%)] screen900:relative mb-20">
            <div className="flex justify-center items-center">
                <div className="w-6 h-[0.5px] bg-gray-200 opacity-30"></div>
                <div className="uppercase mx-2 text-[10px] tracking-wide font-[1000] text-center text-gray-400">Sign up and get free coffee bags</div>
                <div className="w-6 h-[0.5px] bg-gray-200 opacity-30"></div>
            </div>
            <div className="text-white text-center text-2xl">Coffee Updates</div>
            <div className="flex gap-2 h-[15%] screen783:w-[40%] w-[60%]">
                <div className="h-full w-[70%] border border-bordercolor-inputSubscribe focus-within:border-gray-400 transition-all duration-300 ease-in-out"><input type="text" placeholder='CUSTOMER@COFFEESTYLE' className='pl-2 w-full h-full bg-[#1D1F2E] text-white text-[10px] tracking-wider font-bold outline-none' /></div>
                <div className="bg-white uppercase cursor-pointer h-full text-center flex justify-center items-center w-[30%] hover:opacity-90 hover:transition-all duration-300 ease-in-out">
                    <div className="text-[10px] tracking-widest font-medium">
                        subscribe
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubscribeUS;