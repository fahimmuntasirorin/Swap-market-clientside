import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AdminPrivateRoute from "../Pages/AdminPrivateRoute/AdminPrivateRoute";
import AllBuyers from "../Pages/AllBuyes/AllBuyers";
import AllSeller from "../Pages/AllSeller/AllSeller";
import BuyerPrivateRoute from "../Pages/BuyerPrivateRoute/BuyerPrivateRoute";
import DisplayCars from "../Pages/DisplayCars/DisplayCars";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MyProduct from "../Pages/MyProduct/MyProduct";
import Register from "../Pages/Register/Register";
import SellerPrivateRoute from "../Pages/SellerPrivateRoute/SellerPrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/category/:category',
                loader:({params})=>fetch(`http://localhost:5000/allcars/${params.category}`),
                element:<BuyerPrivateRoute><DisplayCars></DisplayCars></BuyerPrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/myorder',
                element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            },
            {
                path:'/dashboard/myproduct',
                element:<SellerPrivateRoute><MyProduct></MyProduct></SellerPrivateRoute>
            }
            
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            // {
            //     path:'/dashboard',
            //     element:<BuyerPrivateRoute></BuyerPrivateRoute>
            // },
            {
                path:'/dashboard/addproduct',
                element:<SellerPrivateRoute><AddProduct></AddProduct></SellerPrivateRoute>
            },
            {
                path:'/dashboard/myorder',
                element:<BuyerPrivateRoute><MyOrder></MyOrder></BuyerPrivateRoute>
            },
            {
                path:'/dashboard/allseller',
                element:<AdminPrivateRoute><AllSeller></AllSeller></AdminPrivateRoute>
            },
            {
                path:'/dashboard/allbuyer',
                element:<AdminPrivateRoute><AllBuyers></AllBuyers></AdminPrivateRoute>
            }
        ]

    }
]);
export default router;