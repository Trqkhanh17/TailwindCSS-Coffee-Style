import MapContact from "./GoogleMap";
import Subheadline from "../subheadline";
import { departments } from "../../data/data.contact";
import { motion } from "framer-motion"
import ContactHero from "./contactHero";
import FormContactSection from "./FormContactSection";
const ContentContact = () => {

    return (
        <>
            <div className="flex flex-col w-full justify-center items-center">
                <ContactHero />
                <FormContactSection />
            </div>
            <MapContact />
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
            </div>
        </>
    )
}
export default ContentContact;
