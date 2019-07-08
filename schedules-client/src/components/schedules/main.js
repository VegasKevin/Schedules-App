import React from 'react';
//import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

class main extends React.Component {

    
    createButtons = (array) =>  {
        array.map(() => 
            <div className='button'>
                <Button>arrayOfButtons</Button>
            </div>
            
        );

    }
    render () {
        const arrayOfButtons = [{"name" : "Kevin"}, {"name" : "Mark"}, {"name" :"Steve"}];
        const listButtons = arrayOfButtons.map((name) => <Button key={name.name}>{name.name}</Button>)
        return (
            <div>
                <div>Main.js </div>
                <div display='flex' justifyContent="center">
                    {listButtons}
                </div>
                

            </div>
        );
    };
}

export default main;