import React from 'react';
import { itemsList, paymentsList } from '../../mock_data';
import SelectedItemOverview from './SelectedItemOverview';

const ItemForm = ({ handleInput, handleAddItem, amount, paymentType, selectedItem, totalAmount, handleReset }) => {
    const itemOptions = itemsList().map(
        el => <option value={el.name} key={el.id}>
            {el.name}
        </option>
    );
    const paymentOptions = paymentsList().map(
        el =>   <option value={el.symb} key={el.id}>
                    {el.symb}
                </option>
    );
    return (
        <div>
            <form onSubmit={handleAddItem}>
                <div>
                    <label>Select Item</label>
                    <select onChange={handleInput} 
                        name="selectedItem" 
                        value={selectedItem}
                    >
                        <option value="" />
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
                        <option value="" />
                        {paymentOptions}
                    </select>
                </div>
                <div>
                    <input 
                        type="submit"
                        value="Add Item"
                    />
                </div>
            </form>
            <button onClick={handleReset}>Reset form</button>
            <SelectedItemOverview
                amount={amount}
                paymentType={paymentType}
                itemName={selectedItem}
                totalAmount={totalAmount}
            />
        </div>
    );
}

export default ItemForm;