import ProductsListPrensetacion from "./ProductsListPrensetacion";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const ProductsListContainer = () => {
  const { dispatch } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getProducts = axios.get("https://fakestoreapi.com/products");
      let res = await getProducts;
      setProducts(res.data);
    };

    getData();
  }, []);

  return <ProductsListPrensetacion products={products} dispatch={dispatch} />;
};

export default ProductsListContainer;
