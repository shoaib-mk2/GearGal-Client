import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const BrandItemDetails = () => {

    const productById = useLoaderData();
    const { _id, image, name, brand, type, price, description, rating } = productById;
    const { user } = useContext(AuthContext);

    // add cart items
    const handleAddCartItem = () => {

        const userEmail = user.email;

        const newCartItem = { userEmail, image, name, brand, type, price, description, rating }
        console.log(newCartItem);

        // send data to the server
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCartItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // showing sweet alert after successfully added the product to the DB 
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added to the Cart',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='w-4/5 mx-auto min-h-screen lg:flex lg:items-center'>
            <div className="hero max-h-max max-w-max mx-auto mb-8 bg-base-200 shadow-2xl shadow-[#ff7700] rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="lg:max-w-2xl" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold">{name}</h1>
                        <p className="py-6 text-xl md:text-2xl font-bold">Brand:: <span className="italic text-[#ff7700]">{brand}</span></p>
                        <div className="stats stats-vertical md:stats-horizontal shadow">

                            <div className="stat place-items-center">
                                <div className="stat-title">Price</div>
                                <div className="stat-value">$ {price}M</div>
                                <div className="stat-desc">+ 20% tax</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Type</div>
                                <div className="stat-value text-[#ff7700]">{type}</div>
                                <div className="stat-desc text-[#ff7700]">custom</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Ratings</div>
                                <div className="stat-value">{rating} / 5</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>

                        </div>
                        <p className="py-6 md:text-xl">{description}</p>
                        <button onClick={() => handleAddCartItem()} className="btn btn-block bg-[#ff7700] text-lg font-bold text-white hover:text-black">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandItemDetails;