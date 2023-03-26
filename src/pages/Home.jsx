import { useContext } from "react";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { ProductContext } from "../ProductContext";

function Home() {
  const { products } = useContext(ProductContext);

  if (!products) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-between items-center flex-wrap gap-3">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}

export default Home;
