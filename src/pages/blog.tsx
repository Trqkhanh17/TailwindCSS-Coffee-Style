import Header from "../component/header";
import Subheadline from "../component/subheadline";
import imgLatestPosts1 from "../assets/LifestyleStories1.jpg"
import imgLatestPosts2 from "../assets/LifestyleStories2.jpg"
import imgLatestPosts3 from "../assets/LifestyleStories3.jpg";
import imgLatestPosts4 from "../assets/LifestyleStories4.jpg";
import imgLatestPosts5 from "../assets/LifestyleStories5.jpg";
import { NavLink } from "react-router-dom";
import SubscribeUS from "../component/subscribeUS";
import Footer from "../component/footer";
const Blog = () => {
    interface LatestPostsItems {
        img: string,
        label1: string,
        label2: string,
        date: string,
    }
    const ListLatestPosts: LatestPostsItems[] = [
        {
            img: imgLatestPosts3,
            label1: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
            label2: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts4,
            label1: "More coffee, lower death risk?",
            label2: "Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p  ",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts2,
            label1: "How long does a cup of coffee keep you awake?",
            label2: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts1,
            label1: "Health Check: why do I get a headache when I haven’t had my coffee?",
            label2: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            date: "October 9, 2018"
        },
        {
            img: imgLatestPosts5,
            label1: "Will drinking coffee prolong your life?",
            label2: "Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectusz",
            date: "October 9, 2018"
        }
    ]
    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <div className=" flex flex-col w-full justify-center items-center mx-auto">
                    <div className="bg-gray-100 h-[600px] w-full relative flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-10 lg:w-[65%] w-full">
                            <div className="text-4xl text-center">Read coffee stories on our Blog</div>
                            <div className="text-gray-600 text-xl text-center sm:px-5 xl:px-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                        </div>
                        <div className=""><Subheadline title="Featured Posts" /></div>
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
                    <div className="flex flex-col md:flex-row gap-10 justify-center xl:w-[80%] w-full mt-[1100px] sm:mt-[900px] md:mt-[700px] md:mb-[150px]">
                        <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[70%] gap-10">
                            <div className="text-3xl w-full relative after:absolute after:left-0 after:bg-gray-100 after:w-full after:h-0.5 after:-bottom-4 text-center md:text-start">Latest Posts</div>

                            {ListLatestPosts.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start gap-10 w-full my-6 bg-white shadow-md rounded-lg overflow-hidden">
                                    <div
                                        className="group cursor-pointer relative h-[300px] md:h-[250px] w-full md:w-[400px] bg-cover bg-center flex justify-center items-center hover:bg-gray-900 hover:bg-opacity-10 transition-all ease-in-out duration-300"
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-7 w-[90%] h-[20%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                                            <div className="text-center">explore mug</div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-3 justify-center items-center text-center md:justify-start md:items-start md:text-left">
                                        <div className="hover:text-coffee-600 text-xl leading-8 cursor-pointer transition-all duration-300 ease-in-out">
                                            {item.label1}
                                        </div>
                                        <div className="text-gray-500 text-md leading-7">{item.label2}</div>
                                        <div className="uppercase text-gray-500 font-semibold text-[13px] tracking-widest">
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex flex-col justify-center items-center md:w-[30%] md:justify-start md:items-start gap-10">
                            <div className="text-3xl w-full relative after:absolute after:left-0 after:bg-gray-100 after:w-full after:h-0.5 after:-bottom-4 text-center md:text-start">About Us</div>
                            <div className="w-full flex flex-col my-6 justify-start gap-10">
                                <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-5">
                                    <div className="text-2xl font-medium">CoffeeStyle.</div>
                                    <div className="text-gray-500 text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                    <div className="">
                                        <NavLink to={"/about"} className={"text-md text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400"}>Read the full Story
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="flex flex-col my-6 w-full gap-10 ">
                                    <div className="text-2xl relative after:absolute after:left-0 after:bg-gray-100 after:w-full after:h-0.5 after:-bottom-4 text-center md:text-start">Categories</div>
                                    <div className="group w-full flex justify-start items-center h-10 hover:bg-coffee-50 hover:bg-opacity-20 pl-4 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 hover:after:opacity-60 cursor-pointer hover:after::transition-all hover:after:ease-in-out hover:after:duration-700 hover:transition-all ease-in-out duration-700">
                                        <NavLink to="/About" className={"text-xl text-gray-500 group-hover:text-black transition-all ease-in-out duration-700"}>Barista</NavLink>
                                    </div>
                                    <div className="group w-full flex justify-start items-center h-10 hover:bg-coffee-50 hover:bg-opacity-20 pl-4 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 hover:after:opacity-60 cursor-pointer hover:after::transition-all hover:after:ease-in-out hover:after:duration-700 hover:transition-all ease-in-out duration-700">
                                        <NavLink to="/About" className={"text-xl text-gray-500 group-hover:text-black transition-all ease-in-out duration-700"}>Coffee</NavLink>
                                    </div>
                                    <div className="group w-full flex justify-start items-center h-10 hover:bg-coffee-50 hover:bg-opacity-20 pl-4 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 hover:after:opacity-60 cursor-pointer hover:after::transition-all hover:after:ease-in-out hover:after:duration-700 hover:transition-all ease-in-out duration-700">
                                        <NavLink to="/About" className={"text-xl text-gray-500 group-hover:text-black transition-all ease-in-out duration-700"}>Lifestyle</NavLink>
                                    </div>
                                    <div className="group w-full flex justify-start items-center h-10 hover:bg-coffee-50 hover:bg-opacity-20 pl-4 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 hover:after:opacity-60 cursor-pointer hover:after::transition-all hover:after:ease-in-out hover:after:duration-700 hover:transition-all ease-in-out duration-700">
                                        <NavLink to="/About" className={"text-xl text-gray-500 group-hover:text-black transition-all ease-in-out duration-700"}>Mugs</NavLink>
                                    </div>
                                </div>
                                <div className="flex flex-col my-6 w-full gap-10">
                                    <div className="text-2xl w-full relative after:absolute after:left-0 after:bg-gray-100 after:w-full after:h-0.5 after:-bottom-4 text-center md:text-start">Authors</div>
                                    <div className="w-full p-4 flex justify-start items-center gap-3 h-[80px] hover:bg-coffee-50 hover:bg-opacity-20 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 hover:after:opacity-60 cursor-pointer hover:after::transition-all hover:after:ease-in-out hover:after:duration-700 hover:transition-all ease-in-out duration-700">
                                        <div className="bg-[url(src/assets/myavt.jpg)] h-14 w-14 bg-cover bg-center"></div>
                                        <div className="text-md text-gray-600 w-[50%]">Tran Quoc Khanh</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="large-blog-quote flex flex-col gap-10 justify-center items-center xl:w-[80%] w-full md:p-16 mx-auto mb-20 md:mb-0">
                        <div className="text-xl w-full text-center text-coffee-400 p-8 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 before:absolute before:left-0 before:w-full before:bottom-0 before:bg-coffee-400 before:h-0.5 before:opacity-20">"I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, ’Remember how good this is. Because you can lose it."</div>
                        <div className="uppercase text-sm tracking-widest font-medium text-gray-500 opacity-60">Jason Johnson - Owner of CoffeeStyle</div>
                    </div>
                </div>
                <SubscribeUS />
                <Footer />
            </div>
        </>
    )
}
export default Blog;