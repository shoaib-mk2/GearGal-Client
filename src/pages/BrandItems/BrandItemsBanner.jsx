

const BrandItemsBanner = ({ filterProducts }) => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    {/* <img src={filterProducts[0].image} className="w-full" /> */}
                    <div className="hero min-h-[60vh] bg-base-200">
                        <div className="hero-content md:gap-10 flex-col lg:flex-row">
                            <img src={filterProducts[0]?.image} className="md:max-w-3xl" />
                            <div>
                                <h1 className="text-2xl font-bold">- Get Your Dream Car</h1>
                                <p className="text-4xl text-[#ff7700] italic">{filterProducts[0]?.name}</p>
                                <p className="py-6 text-5xl"><span className="text-2xl font-bold">$</span>299 Monthly</p>
                                <button className="btn bg-[#ff7700] text-white hover:text-black font-bold">Test Drive Today !!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    {/* <img src={filterProducts[1].image} className="w-full" /> */}
                    <div className="hero min-h-[60vh] bg-base-200">
                        <div className="hero-content md:gap-10 flex-col lg:flex-row">
                            <img src={filterProducts[1]?.image} className="md:max-w-3xl" />
                            <div>
                                <h1 className="text-2xl font-bold">- Get Your Dream Car</h1>
                                <p className="text-4xl text-[#ff7700] italic">{filterProducts[1]?.name}</p>
                                <p className="py-6 text-5xl"><span className="text-2xl font-bold">$</span>250 Monthly</p>
                                <button className="btn bg-[#ff7700] text-white hover:text-black font-bold">Test Drive Today !!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    {/* <img src={filterProducts[2].image} className="w-full" /> */}
                    <div className="hero min-h-[60vh] bg-base-200">
                        <div className="hero-content md:gap-10 flex-col lg:flex-row">
                            <img src={filterProducts[2]?.image} className="md:max-w-3xl" />
                            <div>
                                <h1 className="text-2xl font-bold">- Get Your Dream Car</h1>
                                <p className="text-4xl text-[#ff7700] italic">{filterProducts[2]?.name}</p>
                                <p className="py-6 text-5xl"><span className="text-2xl font-bold">$</span>499 Monthly</p>
                                <button className="btn bg-[#ff7700] text-white hover:text-black font-bold">Test Drive Today !!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default BrandItemsBanner;