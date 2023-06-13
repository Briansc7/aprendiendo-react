import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import CartContextProvider from "./context/CartContext";
import Layout from "./components/layout/Layout";
import DarkContextProvider from "./context/DarkContext";
import { ThemeProvider } from "@emotion/react";
import { themeCustom } from "./themeConfig";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeCustom}>
        <CartContextProvider>
          <DarkContextProvider>
            <Routes>
              <Route element={<Layout />}>
                {routes.map(({ id, path, Element }) => (
                  <Route path={path} key={id} element={<Element />} />
                ))}
              </Route>

              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </DarkContextProvider>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
