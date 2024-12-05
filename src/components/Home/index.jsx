import { useState, useEffect } from "react";
import { apiClient } from "../../axios/axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await apiClient.get("products");
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await apiClient.delete(`products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card bg-white p-4 rounded shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <div className="flex justify-between py-3">
            <a
              href={`/about/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              Aboutga o'tish
            </a>

            <button
              onClick={() => deleteProduct(product.id)}
              className="text-red-500 hover:underline mt-2"
            >
              Delete
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
