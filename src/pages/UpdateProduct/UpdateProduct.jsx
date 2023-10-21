import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const productById = useLoaderData();
    const { _id, image, name, brand, type, price, description, rating } = productById;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = { image, name, brand, type, price, description, rating }
        console.log(updatedProduct);

        // send data to the server
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // showing sweet alert after successfully added the product to the DB 
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Info Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                window.history.back(); // navigate back to the previous page in the browser's history
                form.reset(); // reset form value after successfully added the product to the DB
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:gap-20 flex-col lg:flex-row-reverse md:w-4/5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update <span className="italic text-[#ff7700]">{name}</span> info!</h1>
                    <p className="py-6">Welcome to our "Car Update" page, where you can effortlessly update a vehicle's details to our growing automotive community. Whether you're a car enthusiast, a seller, or simply want to share information about your car, this page is designed to make the process easy and enjoyable.</p>
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateProduct} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" defaultValue={image} placeholder="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="car name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" name="brand" defaultValue={brand} required>
                                <option value="" selected>What's the car brand?</option>
                                <option value="BMW">BMW</option>
                                <option value="Ferrari">Ferrari</option>
                                <option value="Ford">Ford</option>
                                <option value="Audi">Audi</option>
                                {/* <option value="Porsche">Porsche</option> */}
                                <option value="Mercedes">Mercedes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Type</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" name="type" defaultValue={type} required>
                                <option value="" selected>What's the car type?</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Sport">Sport</option>
                                <option value="Suv">Suv</option>
                                <option value="Sedan">Sedan</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={price} placeholder="price of the car" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name="description" defaultValue={description} placeholder="Short description of the car" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Rating</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" name="rating" defaultValue={rating} required>
                                <option value="" selected>What's the rating of the car?</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff7700] text-white font-bold hover:text-black">Update this car info!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;