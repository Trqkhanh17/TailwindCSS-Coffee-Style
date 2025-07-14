import { productItem } from "../list_product";

interface productProb {
    product: productItem
}
const ProductDescription = (probs: productProb) => {
    const { product } = probs
    return (
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-start w-full gap-20 my-20 md:w-[65%] lg:w-[80%] xl:w-[65%] mx-auto">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-5 w-full">
                <div className="text-xs uppercase text-gray-500 font-bold tracking-widest">details</div>
                <div className="text-gray-500 leading-7">{product.detail}</div>
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start text-center gap-5 w-full">
                <div className="text-xs uppercase text-gray-500 font-bold tracking-widest">Dimensions</div>
                <ul className="w-full text-center lg:text-start lg:list-disc lg:pl-5">
                    <li><span className="text-gray-500">Lenght (In): </span>{product.dimensions.lenghtIn.toFixed(1)}</li>
                    <li><span className="text-gray-500">Height (in): </span>{product.dimensions.heghtIn.toFixed(1)}</li>
                    <li><span className="text-gray-500">Width (in): </span>{product.dimensions.widthIn.toFixed(1)}</li>
                    <li><span className="text-gray-500">Width (in): </span>{product.dimensions.weightOz.toFixed(1)}</li>
                </ul>
            </div>
        </div>
    )
}
export default ProductDescription;