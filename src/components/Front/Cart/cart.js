import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className='products'>
      {/* if no item added */}
      {cart && cart.length > 0 ? cart.map((productItem) => (
        <div className='card'>
          <div>
            <li>
              <img
                className='products-image'
                src={productItem.image}
                alt={productItem.name}
              />
            </li>
          </div>
          <div>
            <h3 className='product-name'>{productItem.name} - {productItem?.count}</h3>
          </div>
          <div className='product-price'>${productItem.price}
          </div>
          <div>
            <button className='product-add-button' onClick={() => handleRemoveFromCart(productItem.id)}>Remove from Cart</button>
          </div>
        </div>
      )) : <p>Cart is empty</p>}
    </div>
  )
}

export default Cart
