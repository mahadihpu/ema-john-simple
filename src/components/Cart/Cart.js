import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shippingCost = 0;
    if(total > 100){
        shippingCost = 0;
    }
    else if(total > 50){
        shippingCost = 4.99;
    }
    else if(total > 0){
        shippingCost = 12.99;
    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return precision;
    }
    const grandTotal = total + shippingCost;
    return (
        <div>
           <h4>Order Summury:</h4> 
           <p>Items Ordered:{cart.length}</p>
           <p>Product Price: ${formatNumber(total)}</p>
           <p>Shippinng Cost: ${formatNumber(shippingCost)}</p>
           <h3>Total Price: ${formatNumber(grandTotal)}</h3>
        </div>
    );
};

export default Cart;