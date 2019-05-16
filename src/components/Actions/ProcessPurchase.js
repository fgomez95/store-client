import React from 'react';

import LayoutWrapper from '../shared/LayoutWrapper';
import ShoppingCart from '../shared/ShoppingCart';
import ItemForm from './ItemForm';
import {itemsList} from '../../mock_data';
//import axios from 'axios';
import PurchaseControls from './PurchaseControls';

class ProcessPurchase extends React.Component {
    state = {
        items: [],
        amount: 0,
        paymentType: "",
        selectedItem: "",
        buyer: "",
        discount: 0,
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
            product: item.id,
            amount: this.state.amount,
            unit_price: item.price,
            quantity: this.state.amount
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
            buyer: "",
            discount: 0,
        });
    }
    handlePlacePurchase = (e) => {
        e.preventDefault();
        const purchase = {
            detail: this.state.items,
            user_buyer: this.state.buyer,
            discount: this.state.discount,
            payment_type: 1,
            user: 1,
        }
        console.log(purchase)
        /*
        axios({
            method: 'post',
            url: 'https://localhost:8000/v1/pos/sales/sale',
            data: {
                detail: [

                ],

            }
        })
        */
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
                        buyer={this.state.buyer}
                    />
                    <PurchaseControls 
                        handlePlacePurchase={this.handlePlacePurchase}
                        handleInput={this.handleInput}
                        discount={this.state.discount}
                    />
                </LayoutWrapper>
            </div>
        );
    }
}

export default ProcessPurchase;