

const AddProduct = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add a Car!</h1>
                    <p className="py-6">Welcome to our "Add Car" page, where you can effortlessly add your vehicle's details to our growing automotive community. Whether you're a car enthusiast, a seller, or simply want to share information about your car, this page is designed to make the process easy and enjoyable.</p>
                    <img src="/addCar.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <input type="text" name="name" placeholder="car name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>What's the car brand?</option>
                                <option>bmw</option>
                                <option>ferrari</option>
                                <option>ford</option>
                                <option>audi</option>
                                <option>porsche</option>
                                <option>mercedes</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Type</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>What's the car type?</option>
                                <option>luxury</option>
                                <option>sport</option>
                                <option>suv</option>
                                <option>sedan</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Price</span>
                            </label>
                            <input type="number" name="price" placeholder="price of the car" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name="description" placeholder="Short description of the car"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Rating</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>What's the rating of the car?</option>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff7700] text-white font-bold hover:text-black">Add this car</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;