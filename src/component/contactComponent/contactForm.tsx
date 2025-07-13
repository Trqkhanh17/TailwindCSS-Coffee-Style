import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { dataForm } from "../../data/data.contact"
import { motion, AnimatePresence } from "framer-motion"
const FormContact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<dataForm>();
    const [isSubmit, SetIsSubmit] = useState(false);
    const onSubmit: SubmitHandler<dataForm> = (data: dataForm) => {
        const formatData = {
            name: data.name.trim(),
            email: data.email.trim(),
            message: data.message.trim()
        }
        console.log("data: ", formatData);
        setTimeout(() => {
            SetIsSubmit(true);
            setTimeout(() => {
                SetIsSubmit(false);
            }, 4000);
        }, 3000);
    }
    return (

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
            <button className="w-full md:w-[50%] h-[60px] text-sm bg-gray-900 text-white uppercase font-bold tracking-widest" type="submit" disabled={isSubmit}>{isSubmit ? "Sending..." : "Send Message"}</button>
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
    )
}
export default FormContact;