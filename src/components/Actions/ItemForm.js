import React from 'react';
import {itemsList, paymentsList} from '../../mock_data';

const ItemForm = ({handleInput, onSubmit, amount, paymentType, itemName}) => {
    const itemOptions = itemsList().map(
        el => <option value={el.name} key={el.code}>
                {el.name}
              </option>
    );
    const paymentOptions = paymentsList().map(
        el => <option value={el.symb} key={el.id}>
                {el.symb}
              </option>
    );
    return(
        <div>
            <form>
                <div>
                    <label>Select Item</label>
                    <select onChange={handleInput} name="itemName" value={itemName}>
                        <option value=""/>
                        {itemOptions}
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input 
                        type="number"
                        placeholder="amount"
                        value={amount}
                        onChange={handleInput}
                        name="amount"
                    />
                </div>
                <div>
                    <label>Payment Type</label>
                    <select onChange={handleInput} name="paymentType" value={paymentType}>
                        <option value=""/>
                        {paymentOptions}
                    </select>
                </div>
            </form>
        </div>
    );
}

export default ItemForm;