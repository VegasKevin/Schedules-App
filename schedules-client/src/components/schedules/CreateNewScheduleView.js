import React from 'react';

import {  getAllScheduleTemplates } from '../../actions/ManageScheduleTemplatesActions';
import { connect } from 'react-redux';
import ScheduleTemplateDropdown from '../scheduleTemplates/ScheduleTemplateDropdown';

class CreateNewSchedule extends React.Component{

    componentDidMount() {
      this.props.getAllScheduleTemplates();
    }

    buildDropdownArray = () => {
        return (
            this.props.allScheduleTemplates.map(template =>{
                return {
                     key : template._id,
                     text : template.ScheduleTemplateName,
                     value : template.ScheduleTemplateName
                }
            })
        )
    }
    
    // displayScheduleTemplates() {
    //     return (
            
    //     )
    // }

    render () {
        return (
            <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between"}}>
                <div>CreateNewScheduleView</div>
                <div>
                    <ScheduleTemplateDropdown
                        scheduleTemplatesArray={this.buildDropdownArray()}
                    />
                </div>
            </div>
            
        );
    }

}

const mapStateToProps = (state) => {
    return {
        allScheduleTemplates : state.manageScheduleTemplates.allScheduleTemplates
    }
}

export default connect(mapStateToProps, { getAllScheduleTemplates })(CreateNewSchedule);