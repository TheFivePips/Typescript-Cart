import { useContext } from "react";
import CartContext from "../context/cartProvider";
import { useCartContextType } from "../context/cartProvider";

const useCart = ():useCartContextType => {
    return useContext(CartContext)
}

export default useCart