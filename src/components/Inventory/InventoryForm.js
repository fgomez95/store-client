import React from 'react';
import LayoutWrapper from '../shared/LayoutWrapper';
import Form from './Form';
class InventoryForm extends React.Component {
    render(){
        return(
            <LayoutWrapper
                isUserAuthenticated={this.props.isUserAuthenticated}
                verifyToken={this.props.handleTokenVerification}
            >
                <Form actionType="New"/>
            </LayoutWrapper>
        );
    }   
}

export default InventoryForm;