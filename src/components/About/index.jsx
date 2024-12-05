import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../axios/axios";

const About = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function fetchProduct() {
    try {
      const res = await apiClient.get(`products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {product ? (
        <div className="product-details">
          <img
            src={product.image}
            alt=""
            className="w-full h-96 object-cover rounded-md mb-4"
          />
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg mt-4">{product.description}</p>
          <p className="text-xl mt-2">Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
