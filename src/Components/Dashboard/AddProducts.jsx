import { useState } from "react";

import image from '/image/undraw_add_content_re_vgqa.svg'

const AddProducts = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmation = window.confirm('Are you sure you want to Add the Product?');
    if (!confirmation) {
      return;
    }

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      })
      .catch(() => {
        setAlertMessage('An error occurred while adding the product.');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
      });
  };

  return (
    <div className="container mx-auto p-4">
      {showAlert && (
        <div className="alert alert-error">
          <span>{alertMessage}</span>
        </div>
      )}
      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span className="text-white text-2xl">Product added successfully!</span>
          </div>
        </div>
      )}
      <h1 className="text-5xl font-bold text-center mb-8">Add a Product</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <div className="border rounded-md overflow-hidden w-full h-70 flex items-center justify-center bg-gray-100 text-gray-500">
           <img src={image} alt="add image"  />
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div>
            <div>
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div>
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
              />
            </div>
            <div>
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div>
              <textarea
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                name="description"
                placeholder="Description"
              ></textarea>
            </div>
            <div>
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
            <div className="flex justify-center items-center">
              <input
                className="btn mt-4 w-full text-lg h-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-600"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
