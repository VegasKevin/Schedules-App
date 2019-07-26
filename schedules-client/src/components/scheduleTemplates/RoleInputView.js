import React from 'react';

class RoleInputView extends React.Component{

    render() {
        return (
            <div className='ui celled list'>
                <div>
                    <b>Ministry Name:  {this.props.ministryName}</b>
                </div>
                <div>
                    <input label="Enter the name of each Role, separated by a space"/* onChange={this.props.onChange} value={this.props.value}*/></input>
                </div>                   
            </div>
        )
    }
}

export default RoleInputView;