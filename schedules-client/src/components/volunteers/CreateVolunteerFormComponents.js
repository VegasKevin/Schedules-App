import React from 'react';

export const fullNameField = () => {
    //render () {
        return (
            <div style={{flexDirection:'row'}}>
                <div>
                    <input placeholder="First Name" required='true' label='First Name'/>
                </div>
                <div>
                    <input placeholder="Last Name" required='true' label="Last Name"></input>
                </div>
                
            </div>
        );
    //};
}