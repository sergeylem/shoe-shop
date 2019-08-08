import React from 'react';
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img className='img' src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div>
            <span className='remove-button'>&#10005;</span>
        </div>
    </div>
)

export default CheckoutItem;
