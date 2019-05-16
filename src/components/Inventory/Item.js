import React from 'react';

const item = ({itemData}) => {
    return(
        <tr>
            <td>
                <img 
                    src={itemData.image}
                    alt="stock photo"
                    height="80px"
                    width="75px"
                />
            </td>  
            <td>{itemData.name}</td>
            <td>{itemData.available}</td>
            <td>{itemData.price}</td>
            <td>{itemData.code}</td>
            <td>
                <button className="btn btn-info mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </td>    
        </tr>
    );
}

export default item;