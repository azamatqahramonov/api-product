import React, { useState } from "react";
import { apiClient } from "../../axios/axios";

const Admin = () => {
  const [productInfo, setProductInfo] = useState({
    category: "",
    description: "",
    image: "",
    inStock: "",
    name: "",
    price: "",
    rating: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productInfo);

    try {
      const res = await apiClient.post("/products", productInfo);
      console.log(res.data);

      setProductInfo({
        category: "",
        description: "",
        image: "",
        inStock: "",
        name: "",
        price: "",
        rating: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="py-2 px-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl p-6  mx-auto bg-gray-50 border border-gray-300 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Admin
        </h1>
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Category"
          value={productInfo.category}
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, category: e.target.value }))
          }
        />
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Description"
          value={productInfo.description}
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Image URL"
          value={productInfo.image}
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, image: e.target.value }))
          }
        />
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="In Stock"
          value={productInfo.inStock}
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, inStock: e.target.value }))
          }
        />
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Name"
          value={productInfo.name}
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Price"
          value={productInfo.price}
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, price: e.target.value }))
          }
        />
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Rating"
          value={productInfo.rating}
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, rating: e.target.value }))
          }
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
