import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/coffee_magazine1.jpg";
import Img2 from "../../assets/coffee_magazine2.jpg";
import Img3 from "../../assets/coffee_magazine3.jpg";
import { motion } from "framer-motion";
type MagazineImageItem = string;

const CoffeeMagazine = () => {
    const ListMagazineImage: MagazineImageItem[] = [Img1, Img2, Img3];
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="coffee-magazine w-[100%] xl:w-[65%] mx-auto mb-40 shadow-md rounded-lg overflow-hidden pb-10 screen790:pb-0"
        >
            <div className="flex sm790:flex-col flex-row justify-center h-[300px] sm790:h-auto gap-3 sm790:gap-20 items-center">
                <div className="w-[50%] sm790:w-full flex flex-col justify-start gap-5 sm790:text-center sm790:justify-center sm790:items-center sm790:order-2">
                    <div className="w-full text-gray-600 font-bold uppercase text-sm pl-10 sm790:pl-0">Premium Offer</div>
                    <div className="w-full text-black text-3xl pl-10 sm790:pl-0">Get our Coffee Magazine</div>
                    <div className="w-full text-gray-600 text-sm font-medium pl-10 sm790:pl-0">The most versatile furniture system ever created.<br /> Designed to fit your life.</div>
                    <div onClick={() => navigate("/products")} className="cursor-pointer bg-gray-900 w-[40%] max-w-[40%] py-4 ml-10 sm790:ml-0 text-white uppercase text-center text-[12px] font-bold tracking-widest hover:opacity-80">start shopping</div>
                </div>

                <div className="w-[50%] sm790:w-[80%] flex gap-4 h-[300px] sm790:order-1 sm790:flex-col sm790:h-[300px] sm790:justify-center sm790:items-center">
                    <div className="bg-cover bg-center w-[70%] sm790:w-full sm790:h-[60%]" style={{ backgroundImage: `url(${ListMagazineImage[0]})` }}></div>

                    <div className="flex flex-col sm790:flex-row w-[30%] gap-5 sm790:h-[40%] sm790:w-full">
                        <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${ListMagazineImage[1]})` }}></div>
                        <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${ListMagazineImage[2]})` }}></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default CoffeeMagazine;