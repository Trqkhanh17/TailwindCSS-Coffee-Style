import { NavLink } from "react-router-dom";
const Footer = () => {
    const menuItems = [
        { label: "Home", to: "/" },
        { label: "Our Products", to: "/products" },
        { label: "Blog", to: "/blog" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
    ];
    const followMeItems = [
        {
            label: "Facebook",
            to: "https://www.facebook.com/profile.php?id=100025821319249"
        },
        {
            label: "Instagram",
            to: "https://www.instagram.com/griffith.qk/"
        },
        {
            label: "GitHub",
            to: "https://github.com/Trqkhanh17"
        },
    ]
    const contactMe: string[] = [
        "I'm Always Happy to Help",
        "khanhtranquoc44@gmail.com",
        "Powered by QuocKhanhDev Author"
    ]
    return (
        <div className="w-[95%] xl:w-[65%] pb-20 mx-auto flex flex-row justify-between maxScreen850:flex-col maxScreen850:items-center maxScreen850:justify-center">

            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="text-gray-900 text-xl font-bold">CoffeeStyle.</div>
                <div className="text-gray-500 text-[16px] max-w-[160px] maxScreen850:max-w-full">Delivering the best coffee life since 1996. From coffee geeks to the real ones.</div>
                <div className="text-[16px] text-gray-500 opacity-40 hover:opacity-100 hover:text-coffee-400 hover:transition-all duration-300 ease-in-out">CoffeeStyle Inc. © 1996</div>
            </div>

            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="mb-4 uppercase text-[17px] text-gray-500 font-semibold tracking-wide">menu</div>
                {menuItems.map((item, index) => (
                    <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out" key={index}>
                        <NavLink to={item.to}>{item.label}</NavLink>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="mb-4 uppercase text-[17px] text-gray-500 font-semibold tracking-wide">follow me</div>
                {followMeItems.map((item, index) => (
                    <div className="text-[16px] text-gray-500 cursor-pointer hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out" key={index}>
                        <a href={`${item.to}`} target="_blank" rel="noopener noreferrer">{item.label}</a>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3 maxScreen850:text-center maxScreen850:mb-12 maxScreen850:justify-center maxScreen850:items-center">
                <div className="mb-4 uppercase text-[17px] text-gray-500 font-semibold tracking-wide">Contact Me</div>
                <div className="text-[16px] text-gray-500">{contactMe[0]}</div>
                <div className="text-[26px] text-gray-500 cursor-pointer maxScreen850:text-[20px] hover:text-coffee-400 hover:font-medium hover:transition-all duration-300 ease-in-out">{contactMe[1]}</div>
                <div className="text-[16px] text-gray-500 opacity-40 hover:opacity-100 hover:text-coffee-400 hover:transition-all duration-300 ease-in-out">{contactMe[2]}</div>
            </div>
        </div>
    )
}
export default Footer;