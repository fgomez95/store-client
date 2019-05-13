import React from 'react';
import Logo from '../../assets/img/store-logo.png';
const logo = () => {
    return(
        <div id="logo">
            <img 
                height="150px"
                src={Logo}
                alt="company logo"
            />
        </div>
    );
} 

export default logo;