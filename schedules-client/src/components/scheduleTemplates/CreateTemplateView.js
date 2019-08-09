import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Header } from 'semantic-ui-react';

import  MinistryInformationField  from './MinistryInformationField';

import { addMinistry, addRole, changeNumberOfServices, addBackGroundCheck } from '../../actions/ScheduleTemplateActions';
import CreateTemplateForm from './CreateTemplateForm';
import history from '../../history';
import CreateVolunteerModalContent from '../volunteers/CreateVolunteerModalContent';
import ConfirmTemplateContent from './ConfirmTemplateContent';

class CreateTemplateView extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            numberOfServices : 0,
            ministryString : "",
            showModal : false
        }

        this.handleNumberOfServicesChange = this.handleNumberOfServicesChange.bind(this);
        this.onChangeNumberOfServices = this.onChangeNumberOfServices.bind(this);
        this.onSubmitMinistryString = this.onSubmitMinistryString.bind(this);
        this.handleMinistryStringChange = this.handleMinistryStringChange.bind(this);
        this.showModal = this.showModal.bind(this);
        this.dismissModal = this.dismissModal.bind(this);
    }
    

    onChangeNumberOfServices = (event) => {
        // console.log("~~ " + this.state.numberOfServices);
        // console.log("target.value: " + event.target.value);
        this.props.changeNumberOfServices(this.state.numberOfServices);
        event.preventDefault();
    }

    handleNumberOfServicesChange (event) {
        this.setState( { numberOfServices : event.target.value });
    }

    onSubmitMinistryString = (event) => {
        const splitMinistryArray = this.state.ministryString.trim().split(/\s+/);
        // console.log("Ministry event: " + this.state.ministryString)
        // console.log("split array: " + splitMinistryArray);
        this.props.addMinistry(splitMinistryArray);
        event.preventDefault();
    }

    handleMinistryStringChange (event) {
        this.setState ({ ministryString : event.target.value});
    }

    dismissModal () {
        this.setState({ showModal : false});
    }

    showModal () {
        this.setState({ showModal : true });
    }

    //This will be a Modal displaying the Summary of the ScheduleTemplate being created with a Confirm & Cancel/Edit button
    renderTemplateSummaryModal () {
        // console.log("state showModal: " + this.state.showModal);
        //  if(this.state.showModal === false){
        //      return (null);
        //  }
         return (
             <Modal trigger={<button className='ui button primary' >Submit Schedule Template</button>}>
                 <Modal.Header>New Schedule Template Summary</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Header>
                                Please Check Schedule Template for Accuracy and Confirm
                            </Header>
                        </Modal.Description>
                        <ConfirmTemplateContent
                            ministryArray={this.props.ministryArray}
                            />
                       
                       

                    </Modal.Content>
             </Modal>
         )
        // return (
        //      <Modal
        //         //show={this.state.showModal}
        //         title="TemplateSummaryModal"
        //         content={<div>
        //             "dskjsdjlsd"
        //             <CreateVolunteerModalContent/>
        //         // <div>
        //         //     <div>
        //         //         TemplateSummaryModal
        //         //     </div>
        //         //     <div>
        //         //         <button onClick={this.dismissModal/*.props.onDismiss*/}>Dismiss</button>
        //         //     </div>
        //         // </div>
        //             }
        //         onDismiss={this.dismissModal/*history.push('/settings/createtemplate')*/}
        //     />
        // )
    }






render () {
    return (
        <div style={{display:'flex', flexDirection:"row", justifyContent:'space-between'}}>
            <div style={{width:'20%'}}>
                <h2>CreateTemplateView</h2>
            </div>
            <div>
                2nd div
            </div>
            <div style={{flexDirection:"vertical" }}>
                <form>
                <div>
                    <input type='text' value={this.state.numberOfServices} onChange={this.handleNumberOfServicesChange}></input>
                    <Button onClick={this.onChangeNumberOfServices} >Change Service</Button>
                </div>
                <div>
                    <input type="text" value={this.state.ministryString} onChange={this.handleMinistryStringChange}></input>
                    <Button onClick={this.onSubmitMinistryString}>Submit Ministry Names</Button>
                </div>

                </form>

                Number of Services: {this.props.numberOfServices}
                {/* <div>
                    <MinistryInformationField
                        ministryArray={this.props.ministryArray}/> 
                </div>                */}
                <div>
                    <CreateTemplateForm
                        ministryArray={this.props.ministryArray}
                        addRole={this.props.addRole}
                        addBackGroundCheck={this.props.addBackGroundCheck}
                        onSubmit={this.props.addBackGroundCheck}
                        />
                </div>  
                {/* <div>
                    <button onClick={this.showModal}>Click to show</button>  
                </div>            */}
                <div /*visible={this.state.showModal}*/>
                    {this.renderTemplateSummaryModal()}
                </div>   
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        ministryArray : state.scheduleTemplate.ministryArray,
        numberOfServices : state.scheduleTemplate.numberOfServices
    }
}

export default connect (mapStateToProps, { addMinistry, addRole, changeNumberOfServices, addBackGroundCheck })(CreateTemplateView);