import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
const shoppingCart = ({items}) => {
    let cartItems;
    if(!items || !items.length) cartItems = <h4>No items yet.</h4>
    else cartItems = items.map((item) => <ShoppingCartItem item={item} key={item.id}/>);
    return(
        <div id="shopping-cart">
            <h2>Cart</h2>
            <div id="cart">
                {cartItems}
            </div>
        </div>
    );
}

export default shoppingCart;