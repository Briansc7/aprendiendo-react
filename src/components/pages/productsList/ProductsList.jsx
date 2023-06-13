import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const ProductsList = () => {
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

  return (
    <div>
      {products.map(({ product }) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt="" style={{ width: "200px" }} />
            <button
              onClick={() => dispatch({ type: "addToCart", payload: product })}
            >
              Agregar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
