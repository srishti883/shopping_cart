import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cart from '../Cart/cart';
import Product from '../Products/product';
import Signup from '../Signup/signup';

function AppRoutes({ productItems, cart, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div>
      <Routes>
        {/* //Passing props value */}
        <Route path="/" element={<Product productItems={productItems} handleAddToCart={handleAddToCart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
