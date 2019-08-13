import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import RoleListView from './RoleListView';

const ConfirmMinistryModal = (props) => {
    return (
        <Modal trigger={/*<Button onClick={props.onConfirmMinistry}
                                disabled={props.ministryTitle === "" || props.rolesArray === []}
        color="blue">
    Submit Schedule Template</Button>}*/props.triggerButton}>
        <Modal.Header>New Ministry Summary:  Please Check Minstry Details for Accuracy and Confirm</Modal.Header>
           <Modal.Content image scrolling>
               <div>
               <RoleListView 
                    rolesArray={props.rolesArray}/>
               </div>
           </Modal.Content>
           <Button color='black' onClick={props.submitConfirmMinistryButton}>Confirm Ministry</Button>
           <Button color='red'>Cancel</Button>
    </Modal>
    )

}

export default ConfirmMinistryModal;