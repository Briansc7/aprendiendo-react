import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return <div>Estoy en el carrito</div>;
};

export default Cart;
