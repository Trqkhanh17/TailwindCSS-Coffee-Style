import { useParams } from "react-router-dom";
import Header from "../component/header";
import { productItems } from "../data/data.ourproducts";
import SubscribeUS from "../component/subscribeUS";
import Footer from "../component/footer";
import ListProduct, { productItem } from "../component/list_product";
import Subheadline from "../component/subheadline";
import ProductOverview from "../component/detailProductComponent/ProductOverview ";
import ProductDescription from "../component/detailProductComponent/ProductDescription";
import ProductHighlight from "../component/detailProductComponent/ProductHighlight";

const DetailProduct = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);
    const product: productItem | undefined = productItems.find(item => item.id === productId);
    if (!product) {
        return <div className="">ERROR</div>
    }
    const getRandomProductSuggestions = (allProdut: productItem[], Id: number) => {
        const filtered = allProdut.filter(pro => pro.id !== Id);
        const productSuggesttions: productItem[] = [];
        while (productSuggesttions.length < 3 && filtered.length > 0) {
            const index = Math.floor(Math.random() * filtered.length);
            productSuggesttions.push(filtered[index]);
            filtered.splice(index, 1);
        }
        return productSuggesttions;
    }

    return (
        <>
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Header />
                <ProductOverview product={product} />
                <ProductDescription product={product} />
            </div>
            <ProductHighlight />
            <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
                <Subheadline title="You might also like these" />
                <div className="mb-20"><ListProduct products={getRandomProductSuggestions(productItems, productId)} /></div>
                <SubscribeUS />
                <Footer />
            </div>
        </>

    )
}
export default DetailProduct;