import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BrandItems from "../pages/BrandItems/BrandItems";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import BrandItemDetails from "../pages/BrandItemDetails/BrandItemDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/brandslogos.json')
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/id/${params.id}`)
            },
            {
                path: "/brandItems/:brand",
                element: <BrandItems></BrandItems>,
                // loader: () => fetch('http://localhost:5000/products')
                loader: ({ params }) => fetch(`http://localhost:5000/products/brand/${params.brand}`)
            },
            {
                path: "/brandItemDetails/:id",
                element: <BrandItemDetails></BrandItemDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/id/${params.id}`)
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;