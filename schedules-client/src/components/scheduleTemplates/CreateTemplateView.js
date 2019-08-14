import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Header, Form, Input } from 'semantic-ui-react';

import { addMinistry, addRole, changeNumberOfServices, /*addBackGroundCheck*/ } from '../../actions/ScheduleTemplateActions';
 import history from '../../history';
import CurrentTemplateBuildView from './CurrentTemplateBuildView';
import TemplateSummaryModalView from './TemplateSummaryModalView';

class CreateTemplateView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            numberOfServices : 0,
            scheduleTemplateName : "",
            modalOpen : false
        }
        this.handleNumberOfServicesChange = this.handleNumberOfServicesChange.bind(this);
        this.onChangeNumberOfServices = this.onChangeNumberOfServices.bind(this);
        this.handleTemplateNameChange = this.handleTemplateNameChange.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleFinalizeTemplate = this.handleFinalizeTemplate.bind(this);
    }    

    onChangeNumberOfServices = (event) => {
        this.props.changeNumberOfServices(this.state.numberOfServices);
        event.preventDefault();
    }

    handleNumberOfServicesChange (event) {
        this.setState( { numberOfServices : event.target.value });
    }

    handleTemplateNameChange (event) {
        this.setState({ scheduleTemplateName : event.target.value });
    }
    handleModalOpen () {
        this.setState({  modalOpen : true });
    }

    handleModalClose () {
        this.setState({ modalOpen : false })
    }

    handleFinalizeTemplate () {

    }

    //This will be a Modal displaying the Summary of the ScheduleTemplate being created with a Confirm & Cancel/Edit button
    renderTemplateSummaryModal () {
        return (
            <TemplateSummaryModalView  
                ministryArray={this.props.ministryArray}
                backGroundCheckArray={this.props.backGroundCheckArray}
                open={this.state.modalOpen}
                onClose={this.handleModalClose}
            />
        )
    }

render () {
    return (
        <div style={{display:'flex', flexDirection:"row", justifyContent:'space-between'}}>
            <div>
                {/*This is a display of the current Schedule Template being built as known in the Schedule Template Store.
                    It's shown on the left hand side of the screen and allows the Admin/User to keep track of the progress of the Schedule Template                */}
                <CurrentTemplateBuildView
                    ministryArray={this.props.ministryArray}
                    numberOfServices={this.props.numberOfServices}
                    handleFinalizeTemplate={this.handleFinalizeTemplate}
                />
            </div>
            <div style={{flexDirection:"vertical" }}>
                <Form>
                    <Form.Input
                        required={true}
                        min="1"
                        max="7"
                        label="Enter the Number of Services for this Schedule Template"
                        type="number"   
                        value={this.state.numberOfServices}
                        onChange={this.handleNumberOfServicesChange}                         
                        />        
                        <Button onClick={this.onChangeNumberOfServices} >Change Service</Button>
                    <Form.Input
                        required={true}
                        type="text"
                        max="50"
                        label="Enter the Name of this Schedule Template"
                        value={this.state.scheduleTemplateName}
                        onChange={this.handleTemplateNameChange}
                        />                    
                </Form>
                <Button color='green' onClick={() => history.push("/settings/createtemplate/addministry")}>Create a New Ministry</Button>  
                <Button className='ui button primary' onClick={this.handleModalOpen} >Submit Schedule Template</Button>        
                {/*This div is to render a Modal.  This is the Confirmation Modal for the entire Schedule Template */}
                <div>
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
        numberOfServices : state.scheduleTemplate.numberOfServices,
        backGroundCheckArray : state.scheduleTemplate.backGroundCheckArray
    }
}
export default connect (mapStateToProps, { addMinistry, addRole, changeNumberOfServices, /*addBackGroundCheck*/ })(CreateTemplateView);