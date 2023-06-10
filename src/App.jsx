import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import CartContextProvider from "./context/CartContext";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
              <Route path={path} key={id} element={<Element />} />
            ))}
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
