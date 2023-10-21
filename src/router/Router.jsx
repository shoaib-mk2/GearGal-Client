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
import PrivateRoute from "../pages/Routes/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/brandslogos.json')
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
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
                element: <PrivateRoute><BrandItemDetails></BrandItemDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/id/${params.id}`)
            },
            {
                path: "/myCart/:userEmail",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/carts/${params.userEmail}`)
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