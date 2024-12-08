import { useState, useEffect } from "react";
import { apiClient } from "../../axios/axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchProducts() {
    try {
      const res = await apiClient.get("products");
      setProducts(res.data.data);
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center gap-6 items-center">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <input
          className="p-2 border"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
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
