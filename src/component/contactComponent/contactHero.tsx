import { officeWrap } from "../../data/data.contact";

const ContactHero = () => {
    return (
        <div className="bg-gray-100 h-[600px] w-full relative flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10 lg:w-[65%] w-full">
                <div className="text-4xl text-center">Let's Connect</div>
                <div className="text-gray-600 text-xl text-center sm:px-5 xl:px-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.</div>
            </div>
            <div className="absolute top-[500px] flex flex-col justify-center items-center w-full">
                <div className="lifestyle-story xl:w-[80%] mx-auto mb-20 w-full">
                    <div className="grid md:grid-cols-2 gap-5 w-full">
                        {officeWrap.map((item, index) => (
                            <div className="pb-5 flex flex-col h-full text-center bg-white shadow-md rounded-lg overflow-hidden gap-10" key={index}>
                                <div className="relative h-[300px] lg:h-[400px] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div className="text-sm uppercase text-gray-500 tracking-widest font-bold">{item.label1}</div>
                                <div className="text-xl">{item.label2}</div>
                                <div className="flex flex-col justify-center items-center text-center text-gray-500 text-lg">
                                    <div className="">{item.label3.label3_1}</div>
                                    <div className="">{item.label3.label3_2}</div>
                                    <div className="">{item.label3.label3_3}</div>
                                </div>
                                <div className="text-gray-500 font-bold">{item.label4}</div>
                                <div className="flex flex-col justify-center items-center text-center text-gray-500 text-lg">
                                    <div className="">{item.time.time1}</div>
                                    <div className="">{item.time.time2}</div>
                                    <div className="">{item.time.time3}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactHero;