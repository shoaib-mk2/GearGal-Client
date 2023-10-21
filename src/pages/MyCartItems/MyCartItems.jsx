import Swal from "sweetalert2";

const MyCartItems = ({ cartItem, cartItems, setCartItems }) => {

    const { _id, image, name, brand, type, price, description, rating } = cartItem;

    const handleDeleteCartItem = id => {

        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = cartItems.filter(ci => ci._id !== id);
                            setCartItems(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className='w-4/5 mx-auto my-14'>
            <div className="hero max-h-max max-w-max mx-auto mb-8 bg-base-200 shadow-2xl shadow-[#ff7700] rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
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
                        <button onClick={() => handleDeleteCartItem(_id)} className="btn btn-block bg-red-700 text-lg font-bold text-white hover:text-black">Delete from cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartItems;