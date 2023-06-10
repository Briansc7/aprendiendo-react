import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Este es mi home</h1>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/products">Ver productos</Link>
    </div>
  );
};

export default Home;
