import React from 'react';
import {paymentsList} from '../../mock_data';
const purchaseControls = (props) => {
  const paymentOptions = paymentsList().map(
    el => <option value={el.symb} key={el.id}>
            {el.symb}
          </option>
  );
  return (
    <div>
      <div>
        <label>Payment Type</label>
        <select onChange={props.handleInput} name="paymentType" value={props.paymentType}>
          <option value="" />
          {paymentOptions}
        </select>
      </div>
      <div>
        <label>Apply discount</label>
        <input
          type="number"
          placeholder="discount"
          value={props.discount}
          onChange={props.handleInput}
          name="discount"
        />
      </div>
      <button
        onClick={props.handlePlacePurchase}
      >Make Purchase</button>
    </div>
  );
}

export default purchaseControls;