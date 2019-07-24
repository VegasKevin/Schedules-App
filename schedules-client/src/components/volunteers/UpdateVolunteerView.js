import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import Modal from './Modal';

import UpdateVolunteerModalContent from './UpdateVolunteerModalContent';
import VolunteerInfoDisplay from './VolunteerInfoDisplay';
import { updateVolunteer } from '../../actions';

class UpdateVolunteerView extends React.Component {

    onSubmit = (formValues) => {
        //e.preventDefault();
        this.props.updateVolunteer(formValues);
        console.log('did on submit in UpdateVolunteerVIew.js');
    }

    render () {
        //console.log('update view: ' + JSON.stringify(this.props.volunteerSelected));
        //console.log("Phone#: " + this.props.volunteerSelected.phoneNumber)
        return (
            <Modal 
                title="UpdateVolunteer"/*{`Update Volunteer:  ${this.props.volunteerSelected.firstName} ${this.props.volunteerSelected.lastName}`}*/
                content={
                    <div /*className='ui celled table'*/ style={{ display:'flex',flexDirection:'row', justifyContent:'space-around', alignItems:"stretch"}}>
                        <div style={{ width:'60%'}}>
                            <UpdateVolunteerModalContent
                                onSubmit={this.onSubmit}
                                onDismiss={() => history.push('/volunteers')}
                            />
                        </div>
                        <div >
                            <VolunteerInfoDisplay
                                key={this.props.volunteerSelected._id}
                                firstName={this.props.volunteerSelected.firstName}
                                lastName={this.props.volunteerSelected.lastName}  
                                backGroundCheck={this.props.volunteerSelected.backGroundCheck}
                                emailAddress={this.props.volunteerSelected.emailAddress}
                                phoneNumber={this.props.volunteerSelected.phoneNumber}
                                ministries={this.props.volunteerSelected.ministries}
                                preferences={this.props.volunteerSelected.preferences}  
                            />
                        </div>
                    </div>
            }
                onDismiss={() => history.push("/volunteers")}
                //volunteerselected= {this.props.volunteerSelected}
                />
            
        )
    }
}

const mapStateToProps =  (state) => {
    return {
        volunteerSelected : state.volunteers.volunteerSelected
    }
}

export default connect (mapStateToProps, { updateVolunteer })(UpdateVolunteerView);