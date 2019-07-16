import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import Modal from './Modal';
import UpdateVolunteerModalContent from './UpdateVolunteerModalContent';

import { updateVolunteer } from '../../actions';

class UpdateVolunteerView extends React.Component {

    onSubmit = formValues => {
        this.props.updateVolunteer (formValues);
        console.log('did on submit in UpdateVolunteerVIew.js');
    }

    render () {
        //console.log('update view: ' + JSON.stringify(this.props.volunteerSelected));
        return (
            <Modal 
                title={`Update Volunteer:  ${this.props.volunteerSelected.firstName} ${this.props.volunteerSelected.lastName}`}
                content={
                    <UpdateVolunteerModalContent
                        onSubmit={this.onSubmit}
                        volunteerselected= {this.props.volunteerSelected}
                        onDismiss={() => history.push('/volunteers')}
                />}
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