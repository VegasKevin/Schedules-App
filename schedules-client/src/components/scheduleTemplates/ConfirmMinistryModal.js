import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import RoleListView from './RoleListView';

const ConfirmMinistryModal = (props) => {
    return (
        <Modal trigger={<Button onClick={props.onConfirmMinistry}
                                disabled={/*this.state*/props.ministryTitle === "" || /*this.state*/props.rolesArray === []}
                                color="blue">
                        Submit Schedule Template</Button>}>
        <Modal.Header>New Ministry Summary:  Please Check Minstry Details for Accuracy and Confirm</Modal.Header>
           <Modal.Content image scrolling>
               {/*<Modal.Description>
                    <div>
                       <Header>
                           
                       </Header>
                   </div> 
               </Modal.Description>*/}
               <div>
               <RoleListView 
                    rolesArray={props.rolesArray}/>
               </div>
           </Modal.Content>
    </Modal>
    )

}

export default ConfirmMinistryModal;