import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import  MinistryInformationField  from './MinistryInformationField';

import { addMinistry, addRole, changeNumberOfServices } from '../../actions/ScheduleTemplateActions';
import CreateTemplateForm from './CreateTemplateForm';

class CreateTemplateView extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            numberOfServices : 0,
            ministryString : ""
        }

        this.handleNumberOfServicesChange = this.handleNumberOfServicesChange.bind(this);
        this.onChangeNumberOfServices = this.onChangeNumberOfServices.bind(this);
        this.onSubmitMinistryString = this.onSubmitMinistryString.bind(this);
        this.handleMinistryStringChange = this.handleMinistryStringChange.bind(this);
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
                        />
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

export default connect (mapStateToProps, { addMinistry, addRole, changeNumberOfServices })(CreateTemplateView);