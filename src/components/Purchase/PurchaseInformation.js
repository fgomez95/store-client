import React from 'react';
import LayoutWrapper from '../shared/LayoutWrapper';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Purchase from './Purchase';

class PurchaseInformation extends React.Component {
  state = {
    data: null,
  }
  componentWillMount(){
   const id = this.props.match.params.id;
   axios(`http://localhost:8000/v1/pos/sales/sale/${id}`)
    .then(data => this.setState(data))
    .catch(err => console.log(err));
  }
  render() {
    const sale = this.state.data;
    console.log(sale)
    return(
      <div id="purchase-information">
        <h1>
          Purchase Information
        </h1>
        <LayoutWrapper
          isUserAuthenticated={this.props.isUserAuthenticated}
          verifyToken={this.props.handleTokenVerification}
        >
        {
          sale
          ? <Purchase sale={sale}/>
          : <p>Loading...</p>
        }
        </LayoutWrapper>
      </div>
    );
  }
}

export default withRouter(PurchaseInformation);