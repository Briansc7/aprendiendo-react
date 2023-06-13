import Cart from "../components/pages/cart/Cart";
import Home from "../components/pages/home/Home";
import LoginFormik from "../components/pages/login/LoginFormik";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginFormik,
  },
  {
    id: "productList",
    path: "/products",
    Element: ProductsListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
];
