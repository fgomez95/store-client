import React from 'react';

const shoppingCartItem = (props) => {
    const {name, code, price, size, totalAmount} = props.item;
    return(
        <div className="shopping-cart-item">
            <p>
                <b>Name: </b>{name}
            </p>
            <p>
                <b>Code: </b>{code}
            </p>
            <p>
                <b>Price: </b>{price}
            </p>
            <p>
                <b>Size: </b>{size}
            </p>
            <p>
                <b>Total: </b>{totalAmount}
            </p>
        </div>
    );
}
export default shoppingCartItem;