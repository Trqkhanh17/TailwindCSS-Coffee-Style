import { useState } from "react";


const About = () => {
    const [isTurnOn, SetIsTurnOn] = useState(Boolean);
    const toggle = () => {
        isTurnOn ? SetIsTurnOn(false) : SetIsTurnOn(true);
    }
    return (
        <>
            <div className="bg-amber-900 h-96 w-3 mx-auto mt-72 relative rounded-xl" onClick={toggle}>
                <div className={`absolute bg-[url('./assets/chongchong.png')] bg-cover bg-center h-44 w-44 -left-[80px] -top-14 ${isTurnOn ? "animate-spin" : ""}`} onClick={toggle}></div>
            </div>
            <div className="bg-amber-300 w-24 h-16 text-center mx-auto p-2 mt-7 border border-amber-600 rounded-xl shadow-xl">Chạm Vào Em Đi</div>
        </>
    )
}
export default About;