import React from 'react';

import LayoutWrapper from '../shared/LayoutWrapper';
import ShoppingCart from '../shared/ShoppingCart';
import ItemForm from './ItemForm';
import {shoppingCart} from '../../mock_data';

class ProcessPurchase extends React.Component {
    state = {
        items: shoppingCart(),
        amount: "",
        paymentType: "",
        itemName: "",
    }
    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    render(){
        return(
            <div id="process-purchase">
                <h1>Process Purchase</h1>
                <LayoutWrapper 
                    verifyToken={this.props.handleTokenVerification}
                    isUserAuthenticated={this.props.isUserAuthenticated}
                >
                    <ShoppingCart items={this.state.items}/>
                    <ItemForm 
                        handleInput={this.handleInput}
                        amount={this.state.amount}
                        paymentType={this.state.paymentType}
                        itemName={this.state.itemName}
                    />
                </LayoutWrapper>
            </div>
        );
    }
}

export default ProcessPurchase;