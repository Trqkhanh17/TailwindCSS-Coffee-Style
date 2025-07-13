import Subheadline from "../subheadline";

const DecoBlock = () => {
    return (
        <div className="bg-gray-100 h-[600px] w-full relative flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10 lg:w-[65%] w-full">
                <div className="text-4xl text-center">Read coffee stories on our Blog</div>
                <div className="text-gray-600 text-xl text-center sm:px-5 xl:px-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <Subheadline title="Featured Posts" />
            <div className="absolute top-[500px] flex flex-col justify-center items-center w-full">
                <div className="lifestyle-story xl:w-[80%] mx-auto mb-20 w-full">
                    <div className="grid md:grid-cols-2 gap-5 w-full">
                        <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="group cursor-pointer relative bg-[url('./assets/LifestyleStories2.jpg')] h-[300px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
                                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                <div className="absolute bottom-7 w-[90%] h-[15%] bg-white uppercase flex justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                    <div className="text-center">explore mug</div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-1 p-4">
                                <div>
                                    <div className="hover:text-coffee-600 text-xl leading-7 cursor-pointer transition-all duration-300 ease-in-out text-center lg:text-start">
                                        How long does a cup of coffee keep you awake?
                                    </div>
                                    <div className="text-gray-500 leading-7 text-center lg:text-start mt-2">
                                        It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.
                                    </div>
                                </div>
                                <div className="uppercase text-gray-500 font-semibold text-[12px] tracking-widest text-center lg:text-start mt-4">
                                    April 27, 2025
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="group cursor-pointer relative bg-[url('./assets/LifestyleStories3.jpg')] h-[300px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
                                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                <div className="absolute bottom-7 w-[90%] h-[15%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                                    <div className="text-center">explore mug</div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-1 p-4">
                                <div>
                                    <div className="hover:text-coffee-600 text-xl leading-7 cursor-pointer transition-all duration-300 ease-in-out text-center lg:text-start">
                                        Recent research suggests that heavy coffee drinkers may reap health benefits.
                                    </div>
                                    <div className="text-gray-500 leading-7 text-center lg:text-start mt-2">
                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                    </div>
                                </div>
                                <div className="uppercase text-gray-500 font-semibold text-[12px] tracking-widest text-center lg:text-start mt-4">
                                    April 27, 2025
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default DecoBlock;