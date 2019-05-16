import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand" id="navigation">
                <Link className="nav-link" to="/dashboard">
                    Logo
                </Link>
                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to="/actions">
                                Actions
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/manage-inventory">
                                Manage Inventory
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/actions/purchase/new">
                                Generate Sale
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;