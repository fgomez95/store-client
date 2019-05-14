import React from 'react';

import LayoutWrapper from '../shared/LayoutWrapper';
import ShoppingCart from '../shared/ShoppingCart';
import ItemForm from './ItemForm';
import {itemsList} from '../../mock_data';

class ProcessPurchase extends React.Component {
    state = {
        items: [],
        amount: 0,
        paymentType: "",
        selectedItem: "",
    }
    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    handleAddItem = (e) => {
        e.preventDefault();
        let item = itemsList().find(el => el.name === this.state.selectedItem);
        item = {
            ...item,
            amount: this.state.amount,
            totalAmount: item.price * this.state.amount
        }
        let items = [...this.state.items];
        items.push(item);
        this.setState({items});
        this.handleReset();
    }
    handleReset = () => {
        this.setState({
            amount: 0,
            selectedItem: "",
        });
    }
    handlePlacePurchase = (e) => {
        e.preventDefault();
        console.log('order placed')
    }
    render() {
        let totalAmount = 0;
        if(this.state.selectedItem !== "") 
            totalAmount = itemsList().find(el => el.name === this.state.selectedItem).price * this.state.amount;
        let totalPurchase = 0;
        if(this.state.items.length > 0)
            totalPurchase = this.state.items.map(el => el.totalAmount).reduce((el, reducer) => el + reducer);
        return (
            <div id="process-purchase">
                <h1>Process Purchase</h1>
                <LayoutWrapper
                    verifyToken={this.props.handleTokenVerification}
                    isUserAuthenticated={this.props.isUserAuthenticated}
                >
                    <ShoppingCart 
                        items={this.state.items} 
                        totalPurchase={totalPurchase}
                    />
                    <ItemForm
                        handleInput={this.handleInput}
                        amount={this.state.amount}
                        paymentType={this.state.paymentType}
                        selectedItem={this.state.selectedItem}
                        totalAmount={totalAmount}
                        handleAddItem={this.handleAddItem}
                        handleReset={this.handleReset}
                    />
                    <button
                        onClick={this.handlePlacePurchase}
                    >Make Purchase</button>
                </LayoutWrapper>
            </div>
        );
    }
}

export default ProcessPurchase;