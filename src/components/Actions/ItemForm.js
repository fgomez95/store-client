import React from 'react';
import {itemsList} from '../../mock_data';

const ItemForm = ({ 
    handleInput, 
    handleAddItem, 
    amount, 
    buyer,
    paymentType, 
    selectedItem, 
    totalAmount, 
    handleReset }) => {
    const itemOptions = itemsList().map(
        el => <option value={el.name} key={el.id}>
            {el.name}
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
                    <label>Buyer</label>
                    <input
                        type="buyer"
                        placeholder="buyer"
                        value={buyer}
                        onChange={handleInput}
                        name="buyer"
                    />
                </div>
                <div>
                    <input 
                        type="submit"
                        value="Add Item"
                    />
                </div>
            </form>
            <button onClick={handleReset}>Reset form</button>
        </div>
    );
}

export default ItemForm;