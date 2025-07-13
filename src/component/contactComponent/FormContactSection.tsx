import { motion } from "framer-motion"
import FormContact from "./contactForm";
import CompanyInfo from "./ComanyInfo";
const FormContactSection = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative xl:w-[80%] top-[1500px] md:top-[700px] lg:top-[800px] w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start z-10 bg-white shadow-md rounded-lg overflow-hidden p-8 py-10 px-5 lg:gap-24"
        >
            <FormContact />
            <CompanyInfo />
        </motion.div>
    )
}
export default FormContactSection;