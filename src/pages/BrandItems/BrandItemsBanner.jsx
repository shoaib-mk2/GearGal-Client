

const BrandItemsBanner = ({ productsByBrand }) => {

    return (
        <div>
            <div className="carousel w-full">
                {
                    productsByBrand.map((productByBrand, idx) => <div key={productByBrand._id} id={idx + 1} className="carousel-item w-full">
                        {/* <img src={productsByBrand[0].image} className="w-full" /> */}
                        <div className="hero min-h-[60vh] bg-base-200">
                            <div className="hero-content md:gap-10 flex-col lg:flex-row">
                                <img src={productByBrand.image} className="md:max-w-3xl" />
                                <div>
                                    <h1 className="text-2xl font-bold">- Get Your Dream Car</h1>
                                    <p className="text-4xl text-[#ff7700] italic">{productByBrand.name}</p>
                                    <p className="py-6 text-5xl"><span className="text-2xl font-bold">$</span>{productByBrand.price * 12} Monthly</p>
                                    <button className="btn bg-[#ff7700] text-white hover:text-black font-bold">Test Drive Today !!</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    productsByBrand.map((productByBrand, idx) => <a key={productByBrand._id} href={`#${idx + 1}`} className="btn btn-sm text-[white] hover:text-black bg-[#ff7700]">{idx + 1}</a>)
                }
            </div>
        </div>
    );
};

export default BrandItemsBanner;