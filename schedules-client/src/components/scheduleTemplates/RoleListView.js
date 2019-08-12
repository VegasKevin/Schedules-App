import React from 'react';
import { Item, Button } from 'semantic-ui-react';

const RoleListView = props => {
    return (
        //<Item.Group divided>
        props.rolesArray.map((aRole, index) => {
            return (
                <Item key={index}>
                    <Item.Content>
                        {/* <Item.Header></Item.Header> */}
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
                        <Button size='mini' color='red'>Delete</Button>
                    </Item.Content>
                    
                </Item>
            //     <div style={{display:'flex', flexDirection:'column'}} key={index}>
            //         <div>
            //             Role Name:  {aRole.roleName}
            //         </div>
            //         <div>
            //             BackGround Check Required:  {(aRole.backGroundCheckRequired === true ) ? "Yes" : "No"}
            //         </div>
            //     </div>
             )
        })
     //   </Item.Group>
    );
}

export default RoleListView