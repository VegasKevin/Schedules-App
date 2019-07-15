import React from 'react';

import { List } from 'semantic-ui-react';

//import {styles} from './styles/VolunteerInfoDisplayStyles.css';
class VolunteerInfoDisplay extends React.Component {
   
    renderBackGround () {
        return (
            <div>Valid Background Check : {this.props.backGroundCheck.toString()}</div>
        )
    }
    renderEmail () {
        return(
            <div>{this.props.emailAddress}</div>
        )
    }
    renderNames () {
        return (
            <div>{this.props.firstName} {this.props.lastName}</div>
        )
    }
    renderPhoneNumbers () {
        return (
            <div>Phone #: {this.props.phoneNumber}</div>
        )
    }
    renderMinistries() {
        return (
            <div>Ministries: {this.props.ministries}</div>
        )
    }
    renderPreferences() {
        return (
            <div>Preferences: {this.props.preferences}</div>
        )
    }
    
    render () {
        return (
            <List.Item key={this.props._id}
                style={this.props.active ? {backgroundColor:"lightblue"} : {backGroundCheck : ""}}
                onClick={this.props.onToggle}            
            >
                <List.Content>
                    {(this.props.firstName !==undefined && 
                        this.props.lastName !== undefined)          ? this.renderNames() : ""}
                    {(this.props.emailAddress !== undefined)        ? this.renderEmail() : ""}
                    {(this.props.backGroundCheck !== undefined)     ? this.renderBackGround() : ""}
                    {(this.props.phoneNumber !== undefined)         ? this.renderPhoneNumbers() : ""}
                    {(this.props.ministries !== undefined) ? this.renderMinistries() : ""}
                    {(this.props.preferences !== undefined) ? this.renderPreferences() : ""}                    
                </List.Content>
            </List.Item>  
        )
    }
}
export default VolunteerInfoDisplay;