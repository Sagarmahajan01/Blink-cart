import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"
import Navbar from "./Components/Navbar"
import SingleProduct from "./Pages/SingleProduct"
import Footer from "./Components/Footer"
import Shippingcart from "./Components/shippingcart"
import { CartContext } from "./CartContext"
import { useState, useEffect } from "react"

function App() {
  const [cart, setCart]=useState({})
   
  useEffect(() => {
    const storedCart = JSON.parse(window.localStorage.getItem('cart')) || {};
    setCart(storedCart);
}, []);

useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

  return (
    <>
      <BrowserRouter>
      <CartContext.Provider value={{cart, setCart}}>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Products" exact element={<Products/>}></Route>
        <Route path="/Contact"   element={<Contact/>}></Route>
        <Route path="/Products/:id" element={<SingleProduct/>}></Route>
         <Route path="*" element={<Error/>}></Route>
       </Routes>
       </CartContext.Provider>
       <Shippingcart/>
       <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
