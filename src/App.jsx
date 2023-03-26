import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { ProductProvider } from "./ProductContext";
import React, { useEffect, useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProducts(json);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchProducts();
  }, []);

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const addItemtoCart = (product) => {
    let ItemInTheCart = cart.find((item) => item.id === product.id);
    if (!ItemInTheCart) {
      setCart([...cart, { quantity: 1, ...product }]);
    } else {
      increaseItemQuantity(product.id);
    }
    navigate("/cart");
  };

  const removeItemfromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseItemQuantity = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
        return item;
      })
    );
  };

  const decreaseItemQuantity = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.quantity--;
        }
        return item;
      })
    );
  };

  return (
    <ProductProvider
      value={{
        products: filterProducts,
        setSearch,
        search,
        addItemtoCart,
        cart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemfromCart,
      }}
    >
      <div className="text-gray-700">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
