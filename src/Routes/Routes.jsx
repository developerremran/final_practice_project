import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import App from "../App";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import DashBoard from "../Pages/DashBoard";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
     path:'/',
     element:<HomeLayouts></HomeLayouts>,
     children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/contact_us',
            element:<ContactUs></ContactUs>
        },
        {
            path:'Dashboard',
            element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
        },
        {
            path:'/our_menu',
            element:<OurMenu></OurMenu>
        },
        {
            path:'our_shop/:category',
            element:<OurShop></OurShop>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
     ]
    }
])


export default router;