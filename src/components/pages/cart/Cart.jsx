import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <button
              onClick={() =>
                dispatch({ type: "deleteById", payload: product.id })
              }
            >
              Eliminar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
