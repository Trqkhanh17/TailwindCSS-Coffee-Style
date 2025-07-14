import { menu, menuItems } from "../../data/data.ourproducts";

type ProductsHeaderProps = {
    activeMenu: menuItems | null;
    setActiveMenu: (item: menuItems) => void;
}
const ProductsHeader = (probs: ProductsHeaderProps) => {
    const { activeMenu, setActiveMenu } = probs
    return (
        <div className="pt-32 flex flex-col justify-center items-center gap-12 lg:w-[65%] w-full mx-auto">
            <div className="text-5xl w-full text-center">{activeMenu?.namePage}</div>
            <div className="md:text-2xl text-lg text-gray-500 text-center w-full">{activeMenu?.description}</div>
            <ul className="flex flex-col md:flex-row justify-between gap-5 w-full">
                {menu.map((item, index) => (
                    <li className={`ct-our-menu-item ${activeMenu?.id === item.id ? "border-coffee-400 opacity-100" : "opacity-65"}`} onClick={() => setActiveMenu(item)} key={index}>
                        {item.namePage}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductsHeader;