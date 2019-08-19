import React from 'react';
import {Form, Radio, Button, Message,  Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

import RoleListView from './RoleListView';
import ConfirmMinistryModal from './ConfirmMinistryModal';
import history from "../../history";

import {addRole, deleteRole, addMinistry, changeCreateMinistryTitle, clearRolesArray} from '../../actions/CreateScheduleTemplateActions';

class AddMinistryView extends React.Component{
    constructor () {
        super();
        this.state= {
            ministryTitle : "",
            roleName : "",
            backGroundRadioValue: null,
            formError : false,   
        }
        this.ministryTitleOnChange=this.ministryTitleOnChange.bind(this);
        this.roleNameOnChange=this.roleNameOnChange.bind(this);
        this.backGroundRadioOnChange=this.backGroundRadioOnChange.bind(this);
        this.submitConfirmMinistryButton = this.submitConfirmMinistryButton.bind(this);
        this.onCancelMinistry = this.onCancelMinistry.bind(this);
    }
    ministryTitleOnChange (event) {
        this.setState ({ ministryTitle: event.target.value})
    }

    roleNameOnChange (event) {
        this.setState({ roleName : event.target.value})
    }

    onSubmitAddRole = (event) => {
        //This function determines if the Role Name is empty or if roleName already exists, it will submit if it has a valid name
        let alreadyExists = this.props.rolesArray.some(role => role.roleName === this.state.roleName);

        if((!(this.state.roleName === "")) && (!alreadyExists)) {
            this.setState({formError : false});
            let radioValue = (this.state.backGroundRadioValue === "true") ? true : false;
            
            this.props.onAddRole({ roleName: this.state.roleName, backGroundCheckRequired : radioValue })
            this.setState({ roleName : "", backGroundRadioValue: null});  //Clears the Input field upon submission
        } else if(alreadyExists){
            this.setState({formError : true});
        }
        event.preventDefault(); //prevents the 'please fill out this field popup'
    }

    backGroundRadioOnChange = (event, {value}) => {
        this.setState({ backGroundRadioValue : value });
    }

    submitConfirmMinistryButton () {        
         this.props.onConfirmMinistry({ministryName : this.props.creatingMinistryTitle, rolesArray : this.props.rolesArray});
         history.push("/settings/createtemplate");
    }

    onCancelMinistry () {
        history.push("/settings/createtemplate");
        this.props.onCancelMinistry();

    }

    render () {
        return (
            <div style={{display:'flex', flexDirection:'row', justifyContent:"space-around"}}>
                <div>
                    AddMinistryView
                </div>
                <div>
                    <Form /*{...this.state.formError === false ? "" : `error`}*/>
                        <Form.Input required
                            label="Enter the Name of the Ministry"
                            placeholder="Ministry Name"
                            value={this.state.ministryTitle}
                            onChange={this.ministryTitleOnChange}
                        />
                        <Form.Input required
                            label="Enter the Role Name"
                            placeholder="Role Name"
                            value={this.state.roleName}
                            onChange={this.roleNameOnChange}
                        />
                        <Message error 
                            visible={this.state.formError}                                
                            header="Duplicate Role Name. All Role Names in a Ministry must be Unique."
                            content="Good Example: Parking1  Parking2   Bad Example: Parking Parking"
                        />
                        <h5>Does this Role require a background check?</h5>
                        <div style={{display:'flex', flexDirection:"row", justifyContent:"space-around"}}>
                            <Form.Field>
                                <Radio //This Radio is 'true'  
                                    label="Yes"
                                    value="true"
                                    checked={this.state.backGroundRadioValue === "true"}
                                    onChange={this.backGroundRadioOnChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio ///THis radio is 'false'
                                    label="No"
                                    value="false"
                                    checked={this.state.backGroundRadioValue === "false"}
                                    onChange={this.backGroundRadioOnChange}
                                />
                            </Form.Field>
                        </div>
                        <Form.Button onClick={this.onSubmitAddRole} color="blue" disabled={this.state.roleName === "" || this.state.backGroundRadioValue === null}>Add Role</Form.Button>
                        <Item.Group divided>
                            <RoleListView rolesArray={this.props.rolesArray} onRoleDelete={() => this.props.onRoleDelete()}/>
                        </Item.Group>
                        

                        <ConfirmMinistryModal
                            submitConfirmMinistryButton={this.submitConfirmMinistryButton}
                            rolesArray={this.props.rolesArray}
                            ministryTitle={this.state.ministryTitle}
                            triggerButton={<Button onClick={this.props.onChangeMinistryName.bind(this, this.state.ministryTitle)} disabled={this.state.ministryTitle === "" || this.props.rolesArray.length < 1}
                         color="blue">Add Minstry to Template</Button>}     />                    
                         
                        <Form.Button color='red' onClick={this.onCancelMinistry}>Cancel Ministry Creation</Form.Button>                         
                   </Form>                
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRoleDelete: (roleName) => dispatch(deleteRole(roleName)),
        onAddRole: (role) => dispatch(addRole(role)),
        onConfirmMinistry: (ministry) => dispatch(addMinistry(ministry)),
        onChangeMinistryName: (ministryName,event) => dispatch(changeCreateMinistryTitle(event,ministryName)),
        onCancelMinistry: () => dispatch(clearRolesArray()),
    }
}

const mapStateToProps = (state) => {
    return {
        rolesArray : state.scheduleTemplate.rolesArray,
        creatingMinistryTitle : state.scheduleTemplate.creatingMinistryTitle
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMinistryView);