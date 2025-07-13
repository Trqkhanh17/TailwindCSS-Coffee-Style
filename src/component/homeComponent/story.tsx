import { NavLink } from "react-router-dom";

const Story = () => {
    return (
        <div className="story">
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <div className="px-3 md:px-32 lg:px-64 xl:px-96 text-3xl leading-10 py-5 mt-20 text-center">Even the all-powerful Pointing has no control about the blind texts.</div>
                <div className="text-base leading-7 text-center text-gray-500 px-12 mb-6">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br /> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                <div className="">
                    <NavLink to={"/about"} className={"text-xl text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400"}>Read the full Story
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Story;