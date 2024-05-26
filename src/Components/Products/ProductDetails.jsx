import { Link, useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const shoeData=useLoaderData();

    const { id,brand, description, image_url, price, title } = shoeData;
    
    return (
        <div className="flex justify-center p-4"> 
        <div className="card shadow-xl max-w-sm mx-auto bg-green-100 rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
          <figure className="overflow-hidden">
            <img src={image_url} alt="Shoes" className="w-full h-64 object-cover" />
          </figure>
          <div className="card-body p-4">
          <h2 className="card-title  font-semibold mt-2 text-xl text-green-500">{title}</h2>
          <h3 className="text-xl  text-yellow-700 mt-1">{brand}</h3>
          <h4 className="text-xl text-red-800 font-bold mt-1">${price}</h4>
            <p className="text-lg text-gray-600 mt-2 ">{description}</p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Now</button>
              <Link to={`/productdetails/${id}`}>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;