import React from 'react';
import CardWithLink from '../shared/CardWithLink';

class Dashboard extends React.Component {
    render(){
        const options = [
            {
                name: "Actions",
                path: "/actions"
            },
            {
                name: "Manage Inventory",
                path: "/inventory"
            },
        ];
        const optionCards = options.map(
            el => <CardWithLink 
                    name={el.name} 
                    route={el.path} 
                    key={el.name}
                   />
            );
        return(
            <div>
                <h1>
                    Dashboard
                </h1>
                {optionCards}
            </div>
        );
    }
}

export default Dashboard;