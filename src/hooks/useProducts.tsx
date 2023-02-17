import { useContext } from "react";
import ProductsContext from "../context/productsProvider";
import { useProductsContextType } from "../context/productsProvider";

const useProducts = (): useProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
