import { motion } from "framer-motion";
const OwnerSquote = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="large-blog-quote flex flex-col gap-10 justify-center items-center xl:w-[80%] w-full md:p-16 mx-auto mb-20 md:mb-0"
        >
            <div className="text-xl w-full text-center text-coffee-400 p-8 relative after:absolute after:left-0 after:w-0.5 after:h-full after:bottom-0 after:bg-coffee-400 after:opacity-20 before:absolute before:left-0 before:w-full before:bottom-0 before:bg-coffee-400 before:h-0.5 before:opacity-20">"I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, ’Remember how good this is. Because you can lose it."</div>
            <div className="uppercase text-sm tracking-widest font-medium text-gray-500 opacity-60">Jason Johnson - Owner of CoffeeStyle</div>
        </motion.div>
    )
}
export default OwnerSquote;