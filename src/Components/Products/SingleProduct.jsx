/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  return words.length > wordLimit
    ? `${words.slice(0, wordLimit).join(" ")}...`
    : description;
};

const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="flex justify-center p-4">
      <div className="card w-full h-full shadow-xl max-w-sm mx-auto bg-gray-100 rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
        <figure className="overflow-hidden">
          <img
            src={image_url}
            alt="Shoes"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title  font-semibold mt-2 text-xl text-green-500">{title}</h2>
          <h3 className="text-xl  text-yellow-700 mt-1">{brand}</h3>
          <h4 className="text-xl text-red-800 font-bold mt-1">${price}</h4>
          {description && ( 
            <p className="text-lg text-gray-600 mt-2 ">
              {truncateDescription(description, 9)}
            </p>
          )}
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Buy Now
            </button>
            <Link to={`/productdetails/${id}`}>
              <button className="btn bg-cyan-900 text-white px-4 py-2 ml-2 rounded-md hover:bg-cyan-800">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
