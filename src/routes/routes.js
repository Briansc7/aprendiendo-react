import Cart from "../components/pages/cart/Cart";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import ProductsList from "../components/pages/productsList/ProductsList";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
  },
  {
    id: "productList",
    path: "/products",
    Element: ProductsList,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
];
