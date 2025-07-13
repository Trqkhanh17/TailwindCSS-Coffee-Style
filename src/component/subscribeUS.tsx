import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
interface SubscribeFormData {
    email: string;
}

const SubscribeUS: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SubscribeFormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit: SubmitHandler<SubscribeFormData> = (data) => {
        setIsSubmitting(true);
        console.log("Submitted data:", data);

        setTimeout(() => {
            setIsSubmitting(false);
            reset();
        }, 4000);
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >        <div className="ct-subscribe-us bg-[#1D1F2E] w-full h-72 flex flex-col items-center justify-center gap-4 screen900:w-[100vw] screen900:left-[calc(-50vw+50%)] screen900:relative mb-20">
                <div className="flex justify-center items-center">
                    <div className="w-6 h-[0.5px] bg-gray-200 opacity-30"></div>
                    <div className="uppercase mx-2 text-[10px] tracking-wide font-[1000] text-center text-gray-400">
                        Sign up and get free coffee bags
                    </div>
                    <div className="w-6 h-[0.5px] bg-gray-200 opacity-30"></div>
                </div>
                <div className="text-white text-center text-2xl">Coffee Updates</div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex gap-2 h-[15%] screen783:w-[40%] w-[60%]"
                >
                    <input
                        type="text"
                        placeholder="CUSTOMER@COFFEESTYLE"
                        className="pl-2 w-full h-full bg-[#1D1F2E] text-white text-[10px] tracking-wider font-bold outline-none border border-bordercolor-inputSubscribe focus-within:border-gray-400 transition-all duration-300 ease-in-out"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        })}
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        className="bg-white uppercase cursor-pointer h-full text-center flex justify-center items-center w-[30%] text-[10px] tracking-widest font-medium"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Subscribe"}
                    </button>
                </form>
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}

                <AnimatePresence>
                    {isSubmitting && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="screen783:w-[40%] w-[60%] bg-amber-600 text-md p-2 animate-pulse text-center"
                        >
                            Oops! Something went wrong while submitting the form.
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>

    );
};

export default SubscribeUS;
