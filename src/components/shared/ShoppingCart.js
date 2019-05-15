import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
const shoppingCart = ({items, totalPurchase}) => {
    let cartItems;
    if(!items || !items.length) cartItems = <h4>No items yet.</h4>
    else cartItems = items.map((item, id) => <ShoppingCartItem item={item} key={id}/>);
    return(
        <div id="shopping-cart">
            <h2>Cart</h2>
            <div id="cart">
                {cartItems}
            </div>
            <h3>Total Purchase: {totalPurchase}</h3>
        </div>
    );
}

export default shoppingCart;