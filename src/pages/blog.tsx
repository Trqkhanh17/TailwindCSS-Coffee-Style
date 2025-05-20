import Header from "../component/header";
import Subheadline from "../component/subheadline";

const Blog = () => {
    return (
        <>
            <div className="content-wrapper font-Karla text-base mx-auto px-8">
                <Header />
                <div className=" flex flex-col gap-[500px] w-full justify-center items-center mx-auto">
                    <div className="bg-gray-100 h-[600px] w-full relative flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-10 lg:w-[65%] w-full">
                            <div className="text-4xl text-center">Read coffee stories on our Blog</div>
                            <div className="text-gray-600 text-xl text-center sm:px-5 lg:px-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                        </div>
                        <div className=""><Subheadline title="Featured Posts" /></div>
                        <div className="absolute top-[500px] flex flex-col justify-center items-center w-full">
                            <div className="lifestyle-story xl:w-[80%] mx-auto mb-20 w-[100%]">
                                <div className="xl:grid screen783:grid-cols-2 gap-5 w-full">

                                    <div className="flex flex-col xl:justify-start xl:items-start justify-center items-center gap-4">
                                        <div className="group cursor-pointer relative bg-[url('./assets/LifestyleStories2.jpg')] h-[300px] lg:h-[400px] w-full bg-cover bg-center flex justify-center items-center hover:bg-gray-900 hover:bg-opacity-10 hover:transitioncleaclea-all hover:ease-in-out hover:duration-300">
                                            <div className="absolute bottom-7 w-[90%] h-[15%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 ease-in-out flex">
                                                <div className='text-center'>explore mug</div>
                                            </div>
                                        </div>
                                        <div className="hover:text-coffee-600 text-xl leading-7 cursor-pointer hover:transition-all duration-300 ease-in-out text-center lg:text-start"> How long does a cup of coffee keep you awake?</div>
                                        <div className="text-gray-500 leading-7 text-center lg:text-start">It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.</div>
                                        <div className="uppercase text-gray-500 font-semibold text-[12px] tracking-widest text-center lg:text-start">April 27, 2025</div>
                                    </div>

                                    <div className="flex flex-col xl:justify-start xl:items-start justify-center items-center gap-4">
                                        <div className="group cursor-pointer relative bg-[url('./assets/LifestyleStories3.jpg')] h-[300px] lg:h-[400px] w-full bg-cover bg-center flex justify-center items-center hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300">
                                            <div className="absolute bottom-7 w-[90%] h-[15%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 ease-in-out flex">
                                                <div className='text-center'>explore mug</div>
                                            </div>
                                        </div>
                                        <div className="hover:text-coffee-600 text-xl leading-7 cursor-pointer hover:transition-all duration-300 ease-in-out text-center lg:text-start"> Recent research suggests that heavy coffee drinkers may reap health benefits.</div>
                                        <div className="text-gray-500 leading-7 text-center lg:text-start">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
                                        <div className="uppercase text-gray-500 font-semibold text-[12px] tracking-widest text-center lg:text-start">April 27, 2025</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 justify-center w-[80%]">
                        <div className="flex flex-col w-[70%]">
                            <div className="text-3xl relative after:absolute after:left-0 after:bg-gray-100 after:w-full after:h-0.5 after:-bottom-1.5">Latest Posts</div>
                            <div className="">2</div>
                            <div className="">3</div>
                            <div className="">4</div>
                            <div className="">5</div>
                            <div className="">6</div>
                        </div>
                        <div className="flex flex-col w-[30%]">
                            <div className="text-3xl relative after:absolute after:left-0 after:bg-gray-100 after:w-full after:h-0.5 after:-bottom-1.5">About Us</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;