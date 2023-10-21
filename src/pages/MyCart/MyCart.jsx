
import { useLoaderData } from "react-router-dom";
import MyCartItems from "../MyCartItems/MyCartItems";
import { useState } from "react";


const MyCart = () => {

    const loadedCartItems = useLoaderData();
    const [cartItems, setCartItems] = useState(loadedCartItems);
    return (
        <div>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 border-b-2 pb-5 w-4/5 mx-auto">My Cart Items</h2>
            {
                cartItems.map(cartItem => <MyCartItems
                    key={cartItem._id}
                    cartItem={cartItem}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                ></MyCartItems>)
            }
        </div>
    );
};

export default MyCart;