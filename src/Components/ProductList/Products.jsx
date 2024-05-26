
import Pagination from "../Pagination/Pagination";
import SingleProduct from "../Products/SingleProduct";




// eslint-disable-next-line react/prop-types
const Products = ({data}) => {

    console.log(data)



    return (
        <>
        <p className="text-center text-3xl font-serif mt-5  text-green-500">Our available shoes</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
        {
            // eslint-disable-next-line react/prop-types
            data.map((shoe)=>{
               return <SingleProduct shoe={shoe} key={shoe.id}></SingleProduct>
            })
        }
       
        </div>
        <div>
            <Pagination></Pagination>
        </div>
       
        </>
    );
};

export default Products;