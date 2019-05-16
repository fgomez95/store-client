import React from 'react';
import LayoutWrapper from '../shared/LayoutWrapper';
import InventoryTable from './InventoryTable';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Inventory extends React.Component {
    state = {
        data: null,
    }
    componentDidMount(){
        axios('/sales/product')
            .then(response => this.setState({data: response.data}))
            /*Error is not handled properly*/
            .catch(err => console.log(err));
    }
    render(){
        const data = this.state.data;
        return(
            <LayoutWrapper
                isUserAuthenticated={this.props.isUserAuthenticated}
                verifyToken={this.props.handleTokenVerification}
            >
            <Link className="btn btn-primary m-3 float-right" to="/inventory/new">
                Add
            </Link>
            <h1 className="mb-4">
                Inventory
            </h1>
            
            
            {
                data
                ?
                    <InventoryTable items={data}/>
                :
                    <p>Loading...</p>
            }
            </LayoutWrapper>
        );
    }
}

export default Inventory;