import { useContext, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { DarkContext } from "../../../context/DarkContext";
import { Typography } from "@mui/material";

const Home = () => {
  const { isDark } = useContext(DarkContext);
  console.log(isDark);
  return (
    <div>
      <h1 style={{ color: isDark ? "white" : "black" }}>Este es mi home</h1>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/products">Ver productos</Link>

      <Typography variant="h1" color="primary">
        Este es un titulo
      </Typography>
    </div>
  );
};

export default Home;
