import { NavLink } from "react-router-dom";
import { ListCategories, ListLatestPosts } from "../../data/data.blog";
import myAvt from "../../assets/myavt.jpg"
const BlogFeedWrap = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 justify-center xl:w-[80%] w-full mt-[1100px] sm:mt-[900px] md:mt-[700px] md:mb-[100px]">
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
                        {ListCategories.map((item) => (
                            <div key={item.title} className="group w-full flex justify-start items-center h-10 hover:bg-coffee-50 hover:bg-opacity-20 pl-4 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 hover:after:opacity-60 cursor-pointer hover:after::transition-all hover:after:ease-in-out hover:after:duration-700 hover:transition-all ease-in-out duration-700">
                                <NavLink to={item.to} className={"text-xl text-gray-500 group-hover:text-black transition-all ease-in-out duration-700"}>{item.title}</NavLink>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col my-6 w-full gap-10">
                        <div className="text-2xl w-full relative after:absolute after:left-0 after:bg-gray-100 after:w-full after:h-0.5 after:-bottom-4 text-center md:text-start">Authors</div>
                        <div className="w-full p-4 flex justify-start items-center gap-3 h-[80px] hover:bg-coffee-50 hover:bg-opacity-20 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 hover:after:opacity-60 cursor-pointer hover:after::transition-all hover:after:ease-in-out hover:after:duration-700 hover:transition-all ease-in-out duration-700">
                            <div className="h-14 w-14 bg-cover bg-center" style={{ backgroundImage: `url(${myAvt})` }}></div>
                            <div className="text-md text-gray-600 w-[50%]">Tran Quoc Khanh</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogFeedWrap;