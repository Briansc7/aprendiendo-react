import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../../context/DarkContext";

function Navbar() {
  const { dispatch } = useContext(DarkContext);
  return (
    <div>
      <ul>
        <li>Productos</li>
        <li>About</li>
        <Link to="/">Ir a Home</Link>
        <Link to="/cart">Ir al carrito</Link>
      </ul>
      <button onClick={() => dispatch({ type: "changeMode" })}>
        Cambiar de modo
      </button>
    </div>
  );
}

export default Navbar;
