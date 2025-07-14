import { menu, menuItems, productItems } from "../../data/data.ourproducts";
import ListProduct from "../list_product";
import ProductsSlider from "./ProductsSlider";
type ProductListSectionProb = {
    activeMenu: menuItems | null
}
const ProductListSection = (prob: ProductListSectionProb) => {
    const { activeMenu } = prob
    const dataProduct = productItems;
    const coffeeMugsIds = [1, 13, 14];
    const othersIds = [3, 4, 6, 7, 9, 11];
    const premiumIds = [8, 10, 15];
    const teaMugsIds = [2, 5, 12];

    const getProductsByIds = (ids: number[]) => {
        return dataProduct.filter((product) => ids.includes(product.id))
    }
    return (
        <>
            {activeMenu?.id === menu[0].id && (
                <>
                    <ProductsSlider />
                    <div className="pb-32">
                        <ListProduct products={dataProduct} />
                    </div>
                </>
            )}

            {activeMenu?.id === menu[1].id && (
                <>
                    <ProductsSlider />
                    <div className="py-32">
                        <ListProduct products={getProductsByIds(coffeeMugsIds)} />
                    </div>
                </>
            )}
            {activeMenu?.id === menu[2].id && (
                <div className="py-32">
                    <ListProduct products={getProductsByIds(othersIds)} />
                </div>
            )}
            {activeMenu?.id === menu[3].id && (
                <div className="py-32">
                    <ListProduct products={getProductsByIds(premiumIds)} />
                </div>
            )}
            {activeMenu?.id === menu[4].id && (
                <div className="py-32">
                    <ListProduct products={getProductsByIds(teaMugsIds)} />
                </div>
            )}
        </>
    )
}
export default ProductListSection;