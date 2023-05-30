import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserDashBoard from "../Pages/DashBoard/UserDashBard/UserDashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";


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
    },

    {
        path:'userdashboard',
        element:<PrivateRoute><UserDashBoard></UserDashBoard></PrivateRoute>,
        children:[
            {
                path:'myCart',
                element:<MyCart></MyCart>
            }
        ]
    }
])


export default router;