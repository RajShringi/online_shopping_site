import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";

function Navbar() {
  const { setSearch, search, cart } = useContext(ProductContext);

  return (
    <header className="py-4 container mx-auto border-b">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest uppercase">
          TrendStop
        </Link>
        <input
          className="border basis-[30%] p-2 rounded-md"
          placeholder="search for products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/cart">
          <p className="bg-pink-500 w-[25px] h-[25px] flex justify-center items-center rounded-full text-white">
            {cart.reduce((acc, cur) => (acc += cur.quantity), 0)}
          </p>
          <AiOutlineShoppingCart className="text-3xl" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
