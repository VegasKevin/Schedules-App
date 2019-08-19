import React from 'react';
import RoleInputView from './RoleInputView';

class MinistryInformationField extends React.Component{

    
    renderMinistryFields () {
        //console.log(this.props.ministryArray);
        return (
        this.props.ministryArray.map(ministry => {
            return (
               <RoleInputView  
                    key={ministry}
                    ministryName={ministry}/>
            )
        })
        );

    }

    render () {
        return (            
            <div>
                <h5>For each ministry listed, enter all roles for each ministry separated by a space</h5>
                {this.renderMinistryFields()}               
            </div>
        )
    }

}

export default MinistryInformationField;