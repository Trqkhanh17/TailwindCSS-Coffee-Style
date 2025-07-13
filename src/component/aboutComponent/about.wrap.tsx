import { motion } from "framer-motion";
import Subheadline from "../subheadline";
interface timeLineItem {
    monthAndYear: string,
    day: number,
    label1: string,
    label2: string | null
}

const WrapAbout = () => {
    const timeLine: timeLineItem[] = [
        {
            monthAndYear: "october 2018",
            day: 4,
            label1: "One day however a small line",
            label2: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum."
        },
        {
            monthAndYear: "august 2018",
            day: 3,
            label1: "Overlaid the jeepers uselessly",
            label2: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum."
        },
        {
            monthAndYear: "june 2018",
            day: 2,
            label1: "Pointing has no control about ",
            label2: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum."
        },
        {
            monthAndYear: "november 2017",
            day: 12,
            label1: "We've started CoffeeStyle.",
            label2: null
        }
    ];
    return (
        <div className="flex flex-col w-full justify-center items-center mx-auto">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <Subheadline title="History Timeline" />
            </motion.div>

            <div className="w-full lg:w-[65%] flex flex-col justify-center items-center gap-40">
                {timeLine.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <div className="w-full flex flex-col gap-5 justify-center items-center text-center relative">
                            <div className="uppercase text-xs tracking-widest font-medium text-gray-500 relative z-10">{item.monthAndYear}</div>
                            <div className="text-lg">{item.label1}</div>
                            {item.label2 && <div className="text-md text-gray-500">{item.label2}</div>}
                            <div className="w-[200px] bg-gray-500 h-[1px] relative opacity-50
                                        after:content-[''] 
                                        after:absolute 
                                        after:w-[1px] 
                                        after:h-[100px]
                                        after:top-0
                                        after:bg-gray-500 
                                        after:left-1/2">
                            </div>
                            <div className="absolute text-4xl tracking-widest font-medium -top-5 opacity-5 z-0">{item.day <= 10 ? `0${item.day}` : item.day}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}
export default WrapAbout;