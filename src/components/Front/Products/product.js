import React from 'react';
import "./product.css";

const Product = ({ productItems, handleAddToCart }) => {
    // here productItems is props
    return (

        <div className='products'>
            {productItems.map((productItem) => (
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
                        <h3 className='product-name'>{productItem.name}</h3>
                    </div>
                    <div className='product-price'>${productItem.price}
                    </div>
                    <div>
                        <button className='product-add-button' onClick={() => handleAddToCart(productItem.id)}>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Product;
