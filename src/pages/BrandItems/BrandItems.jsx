import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandItem from "../BrandItem/BrandItem";


const BrandItems = () => {
    const allProducts = useLoaderData();
    const [filterProducts, setFilterProducts] = useState([]);
    const params = useParams();
    useEffect(() => {
        const filterProductsByBrand = allProducts.filter(product => product.brand === params.brand);
        setFilterProducts(filterProductsByBrand);
    }, [params.brand, allProducts])

    console.log(filterProducts);

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 md:w-4/5 mx-auto md:my-12">
                {
                    filterProducts.map(filterProduct => <BrandItem key={filterProduct._id} filterProduct={filterProduct}></BrandItem>)
                }
            </div>
        </div>
    );
};

export default BrandItems;