import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><smal>By: {seller}</smal></p>
                <p>Price: ${price}</p>
                <br/>
                <p><small>Only {stock} left in stock. Order Soon</small></p>
                <button onClick={() => props.handleAddProducts(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;