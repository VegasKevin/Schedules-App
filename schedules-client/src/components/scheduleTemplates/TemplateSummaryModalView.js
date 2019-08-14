import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

import ConfirmTemplateContent from './ConfirmTemplateContent';

const TemplateSummaryModalView = (props) => {
    return (
        <Modal open={props.open}>
            <Modal.Header>New Schedule Template Summary</Modal.Header>
               <Modal.Content image scrolling>
                   <div style={{display:'flex', flexDirection:'column'}}>
                   <Modal.Description>
                       <div>
                           <Header>
                               Please Check Schedule Template for Accuracy and Confirm
                           </Header>
                       </div>
                       <div>
                       <ConfirmTemplateContent
                           ministryArray={props.ministryArray}
                           backGroundCheckArray={props.backGroundCheckArray}
                           />
                       </div>
                   </Modal.Description>                    
                   <Modal.Description>
                       <div style={{display:"flex", flexDirection:'row'}}>
                           <Button color='black'>Confirm Template Details and Finalize</Button>
                           <Button color='red' onClick={props.onClose}>Cancel Confirmation</Button>
                       </div>
                   </Modal.Description>
                   </div>                   
               </Modal.Content>
        </Modal>
    )
}
export default TemplateSummaryModalView;