import React from 'react';
import {Link} from 'react-router-dom';

const cardWithLink = ({name, route}) => {
    return(
        <div className="card-with-link">
            <Link to={route}>
                <h3>
                    {name}
                </h3>
            </Link>
        </div>
    );
}

export default cardWithLink;