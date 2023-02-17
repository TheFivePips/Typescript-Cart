import Header from "./componenets/header"
import Footer from "./componenets/footer"
import ProductList from "./componenets/productList"
import Cart from "./componenets/cart"
import { useState } from "react"

function App() {
  const [viewCart, setViewCart] = useState(false)
  
  const pageContent = viewCart? <Cart /> : <ProductList />

  const content = (
    <>
        <Header viewCart={viewCart} setViewCart={setViewCart}/>
        {pageContent}
        <Footer viewCart={viewCart}/>
    </>
  )
  return (
    <div className="App">
        {content }
    </div>
  )
}

export default App
