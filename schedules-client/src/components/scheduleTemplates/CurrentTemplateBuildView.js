import React from 'react';
import { Item } from 'semantic-ui-react';

class CurrentTemplateBuildView extends React.Component{

    renderRoleList (aMinistry) {
        return (
            aMinistry.rolesArray.map((aRole, index) => {
                return (
                    <Item key={index}>
                        <Item.Content>                        
                            <Item.Description>
                                <div>
                                    Role Name: {aRole.roleName}
                                </div>
                                <div>
                                    BackGroundCheck Required: {(aRole.backGroundCheckRequired === true) ? "Yes" : "No"}
                                </div>                             
                            </Item.Description>
                        </Item.Content>
                    </Item>
                )
            })
        )
    }

    ///Renders the ministry name and then calls renderRoleList to render the roles for a specific ministry
    renderMinistryList () {
        return (
                this.props.ministryArray.map((aMinistry, index) => {
                    return (
                        <Item key={index}>
                            <Item.Content>
                                <Item.Description>
                                    Ministry Name: {aMinistry.ministryName}
                                    {this.renderRoleList(aMinistry)}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                )})            
        );
    }
    render () {
        return (
            <div>
                <h3>Current Status of the Schedule Template Being Created</h3>
                <div>
                    <h4>Schedule Template Name: {this.props.scheduleTemplateName}</h4>
                    <h5>Number of Services: {this.props.numberOfServices}</h5>
                </div>
                <Item.Group divided>
                    {this.renderMinistryList()}
                </Item.Group>
            </div>

        );
    }
}
export default CurrentTemplateBuildView;