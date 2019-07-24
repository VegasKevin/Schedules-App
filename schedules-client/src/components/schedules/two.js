import React from 'react';
//import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

class two extends React.Component {

    
    createButtons = (array) =>  {
        array.map(() => 
            <div className='button'>
                <Button>arrayOfButtons</Button>
            </div>
            
        );

    }
    render () {
        const arrayOfButtons = [{"name" : "TWO"}, {"name" : "TWOTWO"}, {"name" :"Steve"}];
        const listButtons = arrayOfButtons.map((name) => <Button>{name.name}</Button>)
        return (
            <div>
                <div>two.js </div>
                <div display='flex' justifyContent="center">
                    {listButtons}
                </div>
                

            </div>
        );
    };
}

export default two;