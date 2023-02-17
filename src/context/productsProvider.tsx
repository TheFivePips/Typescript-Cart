import { createContext, ReactElement, useState} from "react";

export type ProductType = {
    sku: string,
    name: string,
    price: number
}


export type useProductsContextType = { products: ProductType[] }

const initContextState: useProductsContextType = { products: [] }

const ProductsContext = createContext<useProductsContextType>(initContextState)


const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

type ChildrenType = { children?: ReactElement | ReactElement[] };


export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
};
  


export default ProductsContext