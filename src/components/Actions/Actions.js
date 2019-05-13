import React from 'react';
import CardWithLink from '../shared/CardWithLink';

class Actions extends React.Component {
    render(){
        const actions = [
            {
                name: "Process Purchase",
                path: "/actions/process-purchase"
            },
            {
                name: "Process Return",
                path: "/actions/process-return"
            }
        ]
        const actionComponents = actions.map(
            (action) => <CardWithLink 
                            name={action.name} 
                            route={action.path} 
                            key={action.name}
                        />
        );
        return(
            <div>
                <h1>
                    Actions
                </h1>
                {actionComponents}
            </div>
        );
    }
}

export default Actions;