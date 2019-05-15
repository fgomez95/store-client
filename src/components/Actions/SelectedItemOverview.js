import React from 'react';

class SelectedItemOverview extends React.Component {
  render() {
    const { amount, itemName, totalAmount } = this.props;
    return (
      <div>
        <strong>Selected:</strong>
        {
          itemName === ""
          ? <p>No Item selected</p>
          : <ul>
              <li>{itemName}</li>
            </ul>
        }
        <div>
          <strong>Amount: </strong><span>{amount}</span>
        </div>
        <div>
          <strong>Payment Type: </strong><span>{this.props.paymentType}</span>
        </div>
        <div>
          <strong>Total Amount for Selected Items: </strong><span>{totalAmount}$</span>
        </div>
      </div>
    );
  }
}

export default SelectedItemOverview;