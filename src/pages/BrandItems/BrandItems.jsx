import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandItem from "../BrandItem/BrandItem";
import BrandItemsBanner from "./BrandItemsBanner";


const BrandItems = () => {
    // const allProducts = useLoaderData();
    // const [filterProducts, setFilterProducts] = useState([]);
    // const params = useParams();
    // useEffect(() => {
    //     const filterProductsByBrand = allProducts.filter(product => product.brand === params.brand);
    //     setFilterProducts(filterProductsByBrand);
    // }, [params.brand, allProducts])

    const productsByBrand = useLoaderData();

    console.log(productsByBrand);

    return (
        <div className="">

            {
                productsByBrand.length > 0
                    ?
                    <>
                        <BrandItemsBanner productsByBrand={productsByBrand}></BrandItemsBanner>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 md:w-4/5 mx-auto md:my-12">
                            {
                                productsByBrand.map(productByBrand => <BrandItem key={productByBrand._id} productByBrand={productByBrand}></BrandItem>)
                            }
                        </div>
                    </>
                    :
                    <p className="flex justify-center items-center md:text-xl lg:text-3xl font-bold w-4/5 mx-auto min-h-screen">
                        We apologize, but at this time, we don't have any products available for this brand. Our team is constantly working to expand our inventory and bring you the best selection of cars. Please check back later or explore our other featured brands for exciting options.
                        <br /><br />
                        In the meantime, if you have any specific requests or questions, feel free to contact our support team. We're here to assist you in your automotive journey and help you find the perfect car that suits your needs and preferences.
                        <br /><br />
                        Thank you for considering us for your automotive needs. We appreciate your patience and understanding as we continue to enhance our offerings.
                    </p>
            }

            {/* <BrandItemsBanner filterProducts={filterProducts}></BrandItemsBanner>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 md:w-4/5 mx-auto md:my-12">
                {
                    filterProducts.map(filterProduct => <BrandItem key={filterProduct._id} filterProduct={filterProduct}></BrandItem>)
                }
            </div> */}
        </div>
    );
};

export default BrandItems;