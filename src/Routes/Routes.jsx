import Root from "../Layout/Root";
import About from "../Pages/Home/About";
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Services from "../Pages/Home/Services";
import Blog from "../Pages/Blog/Blog";

import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import IndividualServiceDetails from "../Pages/ServiceDetails/IndividualServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/serviceDetails',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/serviceDetails/:id',
                element: <IndividualServiceDetails></IndividualServiceDetails>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <CheckOut></CheckOut>
                </PrivateRoute>
                ,
                loader: ({ params }) => fetch(`https://car-doctor-server-pi-one.vercel.app/services/${params.id}`)
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>,
            },
            {
                path: '/bookings',
                element: <PrivateRoute>
                    <Bookings></Bookings>
                </PrivateRoute>
                ,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/serviceDetails',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
        ],
    },
]);

export default router