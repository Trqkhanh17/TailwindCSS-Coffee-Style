import { motion } from "framer-motion"
const MapContact = () => {
    return (
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
    )
}
export default MapContact;