
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

import Products from "../Components/ProductList/Products";
import Reviews from "../Components/Reviews/Reviews";



const Home = () => {

   const data= useLoaderData()



return (
        <>
     
        <Banner></Banner>
        <Products data={data} key={data.id}></Products>
        <Reviews></Reviews>
        <Footer></Footer>
        
        </>
            
        
    );
};

export default Home;