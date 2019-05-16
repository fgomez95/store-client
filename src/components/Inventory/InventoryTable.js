import React from 'react';
import Item from './Item';

const InventoryTable = ({items}) => {
    const tableContent = items.map((el, id) => <Item itemData={el} key={id}/>);
    return(
        <div id="inventory-table">
            <table className="table" >
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Available</th>
                    <th>Price</th>
                    <th>Code</th>
                    <th/>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryTable;