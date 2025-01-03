import Root from "../Layout/Root";
import About from "../Pages/Home/About";
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Services from "../Pages/Home/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Home/Contact";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/serviceDetails/:id',
            element:<ServiceDetails></ServiceDetails>
        },
        {
            path:'/productDetails/:id',
            element:<ProductDetails></ProductDetails>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/register',
            element:<SignUp></SignUp>
        }
      ],
    },
  ]);

  export default router