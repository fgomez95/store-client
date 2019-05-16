import React from 'react';
import {Redirect} from 'react-router-dom';

class LayoutWrapper extends React.Component {
    /*this should be refactored once redux is applied */
    componentDidMount(){
        this.props.verifyToken(true);
        if(!this.props.isUserAuthenticated) return <Redirect exact to="/"/>
    }
    render(){
        return(
            <div id="layout-wrapper">
                {this.props.children}
            </div>
        )
    }
}

export default LayoutWrapper;