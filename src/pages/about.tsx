import Header from "../component/header";
import Subheadline from "../component/subheadline";
import { motion } from "framer-motion";
import Footer from "../component/footer";
import SubscribeUS from "../component/subscribeUS";
import imgOwen from "../assets/OwnImg.jpg"
import imgMugDesigner1 from "../assets/MugDesigner1.jpg"
import imgMugDesigner2 from "../assets/MugDesigner2.jpg"
import imgParallax from "../assets/about_parallax.jpg"
import Parallax from "../component/parallax";
const About = () => {
    interface timeLineItem {
        monthAndYear: string,
        day: number,
        label1: string,
        label2: string | null
    }
    interface memberItem {
        name: string,
        title: string,
        img: string
    }
    const member: memberItem[] = [
        { name: "Fred Gleason", title: "Brand Owner", img: imgOwen },
        { name: "Isabel Hamill", title: "Mug Designer", img: imgMugDesigner1 },
        { name: "Maurice Herman", title: "Mug Designer", img: imgMugDesigner2 }
    ]
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
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8 mb-24">
                <Header />
                <div className="flex flex-col w-full justify-center items-center mx-auto">
                    <div className="bg-gray-100 h-[600px] w-full relative flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-10 w-full">
                            <div className="text-4xl text-center">About</div>
                            <div className="text-gray-600 text-xl text-center sm:px-5 xl:px-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
                            <div className="absolute bg-[url('./assets/headerImgPageAbout.jpg')] bg-cover bg-center h-[400px] w-full xl:w-[80%] top-[500px]"></div>
                        </div>
                    </div>

                    <div className="mt-[250px]"><Subheadline title="Introductions" /></div>
                    <div className="flex flex-col justify-center items-center gap-10 shadow-md rounded-lg overflow-hidden lg:w-[65%] px-5">
                        <div className="text-center text-3xl">Overlaid the jeepers uselessly much excluding everyday life.</div>
                        <div className="text-center text-gray-500">It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                    </div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <div className="w-full flex flex-col gap-10 lg:flex-row-reverse justify-center items-center shadow-md rounded-lg overflow-hidden mt-24">
                            <div className="bg-[url('./assets/about_img1.jpg')] bg-cover bg-center h-[400px] w-full"></div>
                            <div className="w-full flex flex-col gap-10 justify-center items-center lg:justify-start lg:items-start lg:pl-10">
                                <div className="text-3xl text-center lg:text-start">Overlaid the jeepers uselessly much excluding everyday life.</div>
                                <div className="bg-gray-500 w-[30px] h-0.5 opacity-20"></div>
                                <div className="text-center lg:text-start text-gray-500">It is a paradisematic country, in which roasted parts of sentences fly into your mouth...</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <div className="w-full flex flex-col gap-10 lg:flex-row-reverse justify-center items-center shadow-md rounded-lg overflow-hidden mt-24">
                            <div className="bg-[url('./assets/about_img2.jpg')] bg-cover bg-center h-[400px] w-full"></div>
                            <div className="w-full flex flex-col gap-10 justify-center items-center lg:justify-start lg:items-start lg:pl-10">
                                <div className="text-3xl text-center lg:text-start">Overlaid the jeepers uselessly much excluding everyday life.</div>
                                <div className="bg-gray-500 w-[30px] h-0.5 opacity-20"></div>
                                <div className="text-center lg:text-start text-gray-500">It is a paradisematic country, in which roasted parts of sentences fly into your mouth...</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <Subheadline title="Introductions" />
                    </motion.div>


                    <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">

                        {member.map((item, i) => (
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="w-full"
                                key={i}
                            >
                                <div className="w-full sm:w-96 flex flex-col justify-center items-center gap-10 shadow-md rounded-lg overflow-hidden">
                                    <div className="h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}></div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="text-2xl">{item.name}</div>
                                        <div className="uppercase text-sm text-gray-700 tracking-widest font-medium opacity-80">{item.title}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                    </div>


                </div>
            </div>

            <Parallax img={imgParallax} />

            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
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

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <div className="mt-[160px]"><SubscribeUS /></div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Footer />
                </motion.div>
            </div>
        </>
    );
}

export default About;
