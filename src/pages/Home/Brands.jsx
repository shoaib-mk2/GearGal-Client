import Brand from "./Brand";


const Brands = ({ brandslogos }) => {
    console.log(brandslogos);
    return (
        <div className="mb-16">
            <h2 className="text-5xl text-center mb-10 font-bold">Browse By <span className="text-[#ff7700]">Brands</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-4/5 mx-auto">
                {
                    brandslogos.map((brandlogo, idx) => <Brand key={idx} brandlogo={brandlogo}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;