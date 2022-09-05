import React, { useEffect, useState } from 'react';
import data from "./components/Back/Data/data";
import Header from './components/Front/Header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Front/Routes/Routes';

const App = () => {
  const { productItems } = data;
  const [products, setProducts] = useState(productItems)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const localCartData = localStorage.getItem('cartData')
    if (localCartData)
      setCart(JSON.parse(localCartData))
  }, [])

  const handleAddToCart = (productId) => {

    // Check whether this product is presnent or not in cart
    const isProductInCart = cart?.some(({ id }) => id === productId)
    
    if (isProductInCart) {
      // if the product alredy exist in cartitem
      const updatedProducts = cart?.map((p) => (p.id === productId ? { ...p, count: p.count + 1 } : p))
      setCart(updatedProducts)
      localStorage.setItem('cartData', JSON.stringify(updatedProducts))


    } else {
      
      const selectedProduct = products.find(({ id }) => id === productId)
      setCart([...cart, { ...selectedProduct, count: 1 }])
      localStorage.setItem('cartData', JSON.stringify([...cart, { ...selectedProduct, count: 1 }]))

    }
  }

  const handleRemoveFromCart = (productId) => {
    const isProductInCart = cart?.some(({ count }) => count > 1)
    if (isProductInCart) {
      const updatedProducts = cart.map((p) => (p.id === productId ? { ...p, count: p.count - 1 } : p))
      setCart(updatedProducts)
      localStorage.setItem('cartData', JSON.stringify(updatedProducts))
    } else {
      const updatedProducts = cart.filter(({ id }) => id !== productId)
      if (updatedProducts && updatedProducts.length > 0) {
        setCart(updatedProducts)
        localStorage.setItem('cartData', JSON.stringify(updatedProducts))
      } else {
        setCart([])
        localStorage.setItem('cartData', JSON.stringify([]))

      }
    }
  }

  return (
    <div>
      <Router>
        <Header />
        {/* Passing list of products in routes file */}
        <Routes productItems={products} cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
      </Router>

    </div>
  )

}

export default App
