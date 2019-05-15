import React from 'react';
import ShoppingCart from '../shared/ShoppingCart';
const purchase = ({sale}) => {
  return (
    <div>
      <ShoppingCart items={sale.detail} totalPurchase={sale.subtotal}/>
      <div>
        <b>Code: </b><span>{sale.code}</span>
      </div>
      <div>
        <b>Discount: </b><span>{sale.discount}</span>
      </div>
      <div>
        <b>Total before discount: </b><span>{sale.subtotal}</span>
      </div>
      <div>
        <b>Total after discount: </b><span>{sale.total}</span>
      </div>
      <div>
        <b>Date: </b><span>{(new Date(sale.created_at)).toLocaleDateString()}</span>
      </div>
      <div>
        <b>Buyer: </b><span>{sale.user_buyer}</span>
      </div>
    </div>
  );
}

export default purchase;