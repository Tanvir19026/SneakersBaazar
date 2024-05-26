import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import image from '/image/undraw_undraw_undraw_undraw_selection_f3no_jw9h_-1-_nxfh_-1-_6d1x.svg'



const EditProduct = () => {
  const { id } = useParams();
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    id: id,
    title: "",
    brand: "",
    price: "",
    description: "",
    image_url: ""
  });

  useEffect(() => {
    fetch(`http://localhost:3000/shoes/${id}`)
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Are you sure you want to Update the Product?");
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;


    const data = { id, title, brand, price, description, image_url };

    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      setShowToast(true)
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Product</h1>
      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span className="text-white text-2xl">Product Updated successfully!</span>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1 flex items-center  justify-center">
          <img src={image} alt="Banner" className="w-3/4 h-auto" />
        </div>
        <div className="lg:col-span-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="hidden"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
            <div className="lg:mr-4">
              <label htmlFor="title" className="block text-lg font-bold text-blue-600">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="brand" className="block text-lg font-bold text-blue-600">Brand</label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={formData.brand}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="price" className="block text-lg font-bold text-blue-600">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="description" className="block text-lg font-bold text-blue-600">Description</label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 h-24 p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="lg:mr-4">
              <label htmlFor="image_url" className="block text-lg font-bold text-blue-600">Image URL</label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="lg:mr-4">
              <button type="submit" className="btn bg-blue-500 text-white px-10 py-4 rounded-md hover:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
