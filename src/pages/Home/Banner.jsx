

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/banner-img.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-6xl font-bold">Find Your <span className="text-[#ff7700]">Perfect</span> Car</h1>
                    <p className="mb-5 text-lg">Discover the world of cars, from classics to the latest models, with expert reviews, tips, and more.</p>
                    <button className="btn border-none text-white hover:text-black font-bold bg-[#ff7700]">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;