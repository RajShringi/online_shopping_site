import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { ProductContext } from "../ProductContext";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [error, setError] = useState(false);
  const { addItemtoCart } = useContext(ProductContext);

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await res.json();
        setProduct(json);
      } catch (error) {
        setError(true);
      }
    }
    fetchSingleProduct();
  }, []);

  if (!product) {
    return <Loader />;
  }

  if (error) {
    return <h1 className="text-center">Something went wrong....</h1>;
  }

  return (
    <div className="max-w-2xl mx-auto my-6 flex justify-between items-center gap-8">
      <div className="basis-[45%]">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="basis-[45%]">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <p className="my-2">{product.description}</p>
        <button
          onClick={() => addItemtoCart(product)}
          className="uppercast tracking-widest p-2 bg-pink-600 text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
