import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const ProductsList = () => {
  const { agregarAlCarrito } = useContext(CartContext);
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
      {products.map(({ id, title, image }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" style={{ width: "200px" }} />
            <button onClick={agregarAlCarrito}>Agregar</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
