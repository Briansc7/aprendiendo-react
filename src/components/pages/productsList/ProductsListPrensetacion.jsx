import { Button } from "@mui/material";
import { themeCustom } from "../../../themeConfig";

const ProductsListPrensetacion = ({ products, dispatch }) => {
  return (
    <div>
      {products.map(({ product }) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt="" style={{ width: "200px" }} />
            <Button
              variant="contained"
              sx={{ backgroundColor: themeCustom.palette.primary.second }}
              onClick={() => dispatch({ type: "addToCart", payload: product })}
            >
              Agregar
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsListPrensetacion;
