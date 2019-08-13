import React from 'react';
import { Item, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';

import { deleteRole } from '../../actions/ScheduleTemplateActions';

class RoleListView extends React.Component{
    render() {
        return (
            this.props.rolesArray.map((aRole, index) => {
                return (
                    <Item key={index}>
                        <Item.Content>
                            <Item.Description>
                                <div>
                                    <b>
                                        Role Name: {aRole.roleName}
                                    </b>
                                </div>
                                <div>
                                    BackGround Check Required:  {(aRole.backGroundCheckRequired === true ) ? "Yes" : "No"}
                                </div>                            
                            </Item.Description>
                            <Button size='mini' color='red' onClick={this.props.onRoleDelete.bind(null, aRole.roleName)}>Delete</Button>
                        </Item.Content>                        
                    </Item>
                 )
            })
        );
    }   
}
    

const mapDispatchToProps = (dispatch) => {
    return {
        onRoleDelete: (roleName) => dispatch(deleteRole(roleName))
    }
}
export default connect (null, mapDispatchToProps)(RoleListView);