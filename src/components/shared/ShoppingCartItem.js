import React from 'react';

const shoppingCartItem = ({item}) => {
    console.log(item);
    return(
        <div className="shopping-cart-item">
            <p>
                <b>Item: </b>{item.product}
            </p>
            <p>
                <b>Price: </b>{item.unit_price}
            </p>
            <p>
                <b>Total: </b>{item.quantity}
            </p>
        </div>
    );
}
export default shoppingCartItem;