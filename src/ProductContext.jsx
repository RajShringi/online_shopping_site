// import React, { useEffect, useState } from "react";

// const ProductContext = React.createContext();

// export function ProductProvider({ children }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     async function fetchProducts() {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const json = await res.json();
//         setProducts(json);
//         setLoading(false);
//         setError(false);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return <ProductContext.Provider value={products}></ProductContext.Provider>;
// }

import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;
