/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const ManageProduct = () => {
   
 
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  
  
  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

 

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`http://localhost:3000/shoes/${productId}`, {
          method: "DELETE"
        });
  
        if (response.ok) {
          setProducts(products.filter(product => product.id !== productId));
          console.log("Product deleted successfully:", productId);
          setShowToast(true)
        } else {
          console.error("Failed to delete product:", response.status);
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="container mx-auto py-8 text-xl">
        {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span>Product Deleted successfully!</span>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left py-4 px-6">ID</th>
              <th className="text-left py-4 px-6">Title</th>
              <th className="text-left py-4 px-6">Brand</th>
              <th className="text-left py-4 px-6">Price</th>
              <th className="text-left py-4 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-300">
                <td className="text-left py-4 px-6">{product.id}</td>
                <td className="text-left py-4 px-6">{product.title}</td>
                <td className="text-left py-4 px-6">{product.brand}</td>
                <td className="text-left py-4 px-6">${product.price}</td>
                <td className="text-left py-4 px-6">
                 
                 
                 <Link to={`/dashboard/editproducts/${product.id}`}>
                <button
                    className="text-blue-500 hover:text-blue-700 focus:outline-none mr-4"
                  >
                    <BsPencilSquare className="w-6 h-6" />
                  </button></Link>
                  

                  <button
                  
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:text-red-700 ml-10 focus:outline-none"
                  >
                    <BsTrash className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
