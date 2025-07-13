export interface storiesItem {
    image: string,
    title: string,
    description: string,
    date: string
}
interface dataStories {
    dataStory: storiesItem[]
}
const LifeStyle = (probs: dataStories) => {
    const { dataStory } = probs
    return (
        <div className="lifestyle-story xl:w-[65%] mx-auto mb-20 w-full">
            <div className="grid lg:grid-cols-3 gap-5 xl:mx-auto w-full">
                {dataStory.map((story, index) => (
                    <div key={index} className="flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start gap-4 shadow-md rounded-lg overflow-hidden">
                        <div
                            className="group cursor-pointer relative h-[200px] lg:h-[300px] w-full bg-cover bg-center flex justify-center items-center hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300"
                            style={{ backgroundImage: `url(${story.image})` }}
                        >
                            <div className="absolute bottom-7 w-[90%] h-[15%] bg-white uppercase justify-center items-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex">
                                <div className='text-center'>explore mug</div>
                            </div>
                        </div>
                        <div className="hover:text-coffee-600 text-xl leading-7 cursor-pointer hover:transition-all duration-300 ease-in-out lg:pl-1">
                            {story.title}
                        </div>
                        <div className="text-gray-500 leading-7 lg:pl-1">
                            {story.description}
                        </div>
                        <div className="uppercase text-gray-500 font-semibold text-[12px] tracking-widest lg:pl-1">
                            {story.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LifeStyle;
