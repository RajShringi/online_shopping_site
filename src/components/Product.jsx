import { Link } from "react-router-dom";

function Product({ id, image, title, price }) {
  return (
    <Link
      to={`/products/${id}`}
      className="basis-[20%] border p-2 min-h-[400px] rounded-md"
    >
      <img className="h-[300px] object-cover" src={image} alt={title} />
      <h3 className="text-sm my-2">{title.substring(0, 30)}...</h3>
      <p className="text-sm font-bold">${price}</p>
    </Link>
  );
}
export default Product;
