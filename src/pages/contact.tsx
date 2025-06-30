import Header from "../component/header";
import contactImg1 from "../assets/contactImg1.jpg";
import contactImg2 from "../assets/contactImg2.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import Subheadline from "../component/subheadline";
import SubscribeUS from "../component/subscribeUS";
import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react";
import Footer from "../component/footer";

const Contact: React.FC = () => {
    interface officeWrapItem {
        img: string,
        label1: string,
        label2: string,
        label3: {
            label3_1: string,
            label3_2: string,
            label3_3: string,
        },
        label4: string,
        time: {
            time1: string,
            time2: string,
            time3: string,
        }
    }
    interface departmentsItem {
        label: string,
        name: string,
        phone: string,
        email: string
    }
    interface dataForm {
        name: string;
        email: string;
        message: string;
    }
    const officeWrap: officeWrapItem[] = [
        {
            img: contactImg1,
            label1: "United Kingdom",
            label2: "Canary Wharf, London",
            label3: {
                label3_1: "Jubilee Place",
                label3_2: "London",
                label3_3: "E14 5NY",
            },
            label4: "Opening Times",
            time: {
                time1: "Mon - Fri 08:00 to 22:00",
                time2: "Sat - 09:00 to 20:00",
                time3: "Sun - 12:00 to 18:00"
            }
        },
        {
            img: contactImg2,
            label1: "United States",
            label2: "Venice Beach, California",
            label3: {
                label3_1: "9219 Old Kingston Street South",
                label3_2: "El Monte, CA",
                label3_3: "91733",
            },
            label4: "Opening Times",
            time: {
                time1: "Mon - Wed 09:00 to 21:00",
                time2: "Thu - Sat 09:00 to 22:00",
                time3: "Sun - 10:00 to 19:00"
            }
        }
    ]

    const departments: departmentsItem[] = [
        {
            label: "Press",
            name: "Robb Kohler",
            phone: "086-374-4962",
            email: "robb.kohler@coffeestyle.com"
        },
        {
            label: "Management",
            name: "Roob Dayana",
            phone: "354-341-2750",
            email: "roob.dayana@coffeestyle.com"
        },
        {
            label: "Support",
            name: "Warren Marsh",
            phone: "531-403-0376",
            email: "warren.marsh@coffeestyle.com"
        }
    ]

    const handleSpamClick = () => {
        if (countClick) {
            SetIsSubmit(true);
        }
        return;
    }
    const { register, handleSubmit, formState: { errors } } = useForm<dataForm>();
    const [isSubmit, SetIsSubmit] = useState(false);
    const [countClick, SetCountClick] = useState<boolean>(false);
    const onSubmit: SubmitHandler<dataForm> = (data: dataForm) => {
        const formatData = {
            name: data.name.trim(),
            email: data.email.trim(),
            message: data.message.trim()
        }
        console.log("data: ", formatData);
        SetCountClick(true);
        setTimeout(() => {
            SetIsSubmit(true);
            setTimeout(() => {
                SetIsSubmit(false);
                SetCountClick(false)
            }, 4000);
        }, 3000);
    }
    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <div className="flex flex-col w-full justify-center items-center">

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

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="relative xl:w-[80%] top-[1500px] md:top-[700px] lg:top-[800px] w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start z-10 bg-white shadow-md rounded-lg overflow-hidden p-8 py-10 px-5 lg:gap-24"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full text-center lg:text-start flex flex-col items-center lg:items-start gap-5">
                            <div className="uppercase text-sm text-gray-500 font-bold tracking-widest">contact form</div>
                            <div className="">Drop us your message and I'll get back to you as soon as possible.</div>
                            <div className="uppercase text-sm font-bold text-gray-500 tracking-widest">name</div>
                            <input
                                type="text"
                                className="h-16 w-full border border-gray-300 text-center uppercase text-xs tracking-widest focus:outline-none focus:border-black transition-colors duration-300 ease-in-out"
                                placeholder="enter your name"
                                {...register("name", {
                                    required: "Name is required",
                                    pattern: {
                                        value: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸỳỵỷỹ ]+$/,
                                        message: "Name can only contain letters and spaces."
                                    },
                                    validate: (value) => value.trim() !== "" || "Name cannot be empty or just spaces."
                                })}
                            />
                            {errors.name && (
                                <p className="w-full text-red-700 text-start">*{errors.name.message}!</p>
                            )}
                            <div className="uppercase text-sm font-bold text-gray-500 tracking-widest">email address</div>
                            <input
                                type="email"
                                className="h-16 w-full border border-gray-300 text-center uppercase text-xs tracking-widest focus:outline-none focus:border-black transition-colors duration-300 ease-in-out"
                                placeholder="enter your email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && (<p className="w-full text-red-700 text-start">*{errors.email.message}!</p>)}
                            <div className="uppercase text-sm font-bold text-gray-500 tracking-widest">your message</div>
                            <textarea
                                className="h-32 w-full border border-gray-300 pt-5 text-center uppercase text-xs tracking-widest focus:outline-none focus:border-black transition-colors duration-300 ease-in-out"
                                placeholder="hi! i would like to ask some thing about mugs"
                                {...register("message", {
                                    required: "Message is required"
                                })}
                            />
                            {errors.message && (
                                <p className="w-full text-red-700 text-start">*{errors.message.message}!</p>
                            )}
                            <button className="w-full md:w-[50%] h-[60px] text-sm bg-gray-900 text-white uppercase font-bold tracking-widest" onClick={handleSpamClick} type="submit" disabled={isSubmit}>{isSubmit ? "Sending..." : "Send Message"}</button>
                            <AnimatePresence>
                                {isSubmit && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="w-full bg-amber-600 text-md p-2 animate-pulse"
                                    >
                                        Oops! Something went wrong while submitting the form.
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </form>
                        <div className="bg-gray-500 w-full h-[1px] lg:w-[4px] lg:h-[500px] opacity-10 my-10"></div>
                        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start w-full gap-10">
                            <div className="w-full flex flex-col justify-center lg:justify-start lg:items-start items-center text-center lg:text-start gap-3">
                                <div className="uppercase text-sm text-gray-500 font-bold tracking-widest">contact form</div>
                                <div className="text-xl">CoffeeStyle. Inc</div>
                                <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start text-gray-500 gap-1">
                                    <div className="">Pride Ave, </div>
                                    <div className="">Hamlyn Heights </div>
                                    <div className="">VIC 3215</div>
                                    <div className="">Australia</div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center lg:justify-start text-center lg:text-start items-center lg:items-start">
                                <div className="uppercase text-gray-500 text-sm font-bold tracking-widest">call us</div>
                                <div className="text-xl">+1 (415) 555-1212</div>
                            </div>
                            <div className="flex flex-col justify-center lg:justify-start text-center lg:text-start items-center lg:items-start">
                                <div className="uppercase text-gray-500 text-sm font-bold tracking-widest">email us</div>
                                <div className="text-xl">khanhtranquoc44@gmail.com</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full mt-[1400px] md:mt-[650px] lg:mt-[750px]"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1129.7555745686698!2d105.82728844908009!3d10.108034038016948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a07c4b9993e727%3A0xafd4f8975f8485c7!2zTeG7uSBUaHXhuq1uLCBUaOG7iyB4w6MgQsOsbmggTWluaCwgVsSpbmggTG9uZywgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1750874014319!5m2!1svi!2s"
                    className="border-spacing-0 w-full h-[400px] filter grayscale"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </motion.div>

            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Subheadline title="Directory" />
                </motion.div>
                <div className="mb-28 flex flex-col items-center text-center w-full xl:w-[80%] gap-16 mx-auto">
                    {departments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="w-full flex flex-col items-center lg:grid lg:grid-cols-3 lg:place-items-center gap-5 lg:gap-20 text-center"
                        >
                            <div className="uppercase text-xs font-bold text-gray-500 tracking-widest w-full">
                                {item.label}
                            </div>
                            <div className="text-lg w-full">
                                {item.name}
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <div className="text-gray-500 w-full">{item.email}</div>
                                <div className="text-gray-500 w-full">{item.phone}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <SubscribeUS />
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Footer />
                </motion.div>

            </div>
        </>
    )
}
export default Contact;