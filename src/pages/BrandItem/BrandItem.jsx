

const BrandItem = ({ productByBrand }) => {

    const { _id, image, name, brand, type, price, description, rating } = productByBrand;


    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="h-64"><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold">{name}</h2>
                    <p className="text-2xl text-[#ff7700] font-bold">$ {price}M</p>
                    <div className="flex justify-evenly my-5">
                        <div className="badge badge-outline border-[#ff7700] font-bold">{brand}</div>
                        <div className="badge badge-outline border-[#ff7700] font-bold">{type}</div>
                        <div className="badge badge-outline border-[#ff7700] font-bold">{rating} / 5</div>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-black text-white hover:text-black flex-1 font-bold">View Details</button>
                        <button className="btn bg-[#ff7700] flex-1 font-bold">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandItem;