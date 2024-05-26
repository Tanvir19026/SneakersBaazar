import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layouts/MainLayout';
import ErrorPage from './../Pages/Errorpage';
import Home from "../Pages/Home";
import Registration from './../Components/Log_Reg/Registration';
import Login from './../Components/Log_Reg/Login';
import Dashboard from './../Components/Dashboard/Dashboard';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import AddProducts from "../Components/Dashboard/AddProducts";
import ProductDetails from "../Components/Products/ProductDetails";
import Profile from "../Components/Dashboard/Profile";
import ManageProduct from "../Components/ManageInventory/ManageProduct";
import Editproduct from "../Components/ManageInventory/Editproduct";






export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
      children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch('http://localhost:3000/shoes'),
                },
                {
                    path:'/register',
                    element:<Registration></Registration>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/productdetails/:id',
                    element:<ProductDetails></ProductDetails>,
                    loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`)
                },
               
]},


{
    path:"/dashboard",
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
            {
               path:"/dashboard/addproducts",
               element:<PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path:"/dashboard/profile",
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
             },
             
             {
                path:"/dashboard/management",
                element:<PrivateRoutes><ManageProduct></ManageProduct></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`)
               
             },
             {
                path:'/dashboard/editproducts/:id',
                element:<PrivateRoutes><Editproduct></Editproduct></PrivateRoutes>,
loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`)
            }
            

    ]
}





])