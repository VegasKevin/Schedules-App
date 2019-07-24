import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';


import Modal from './Modal';
import history from '../../history';
//import DeleteVolunteerModalContent from './DeleteVolunteerModalContent';

import { deleteVolunteer } from '../../actions';
import VolunteerInfoDisplay from './VolunteerInfoDisplay';

class DeleteVolunteerView extends React.Component {

    onDismiss () {
        history.push("/volunteers");
    }

    onSubmit (_id) {
        this.props.deleteVolunteer(_id);
    }

    render () {
        return (
                <Modal 
                    title={`Are you certain you want to Delete  ${this.props.volunteerSelected.firstName} ${this.props.volunteerSelected.lastName} from the Volunteers List?`}
                    content={
                        <div>
                            <div>
                                <h3>
                                    {`Current Information for ${this.props.volunteerSelected.firstName} ${this.props.volunteerSelected.lastName}`}
                                </h3>
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
                            <div>
                                <Button color='red' onClick={() => this.onSubmit(this.props.volunteerSelected._id)} type="submit">Delete</Button>
                                <Button secondary onClick={this.onDismiss} type='button'>Cancel</Button>
                            </div>
                        </div>
                    }
                    onDismiss={this.onDismiss}
                />
        )
    }

};

const mapStateToProps = (state) => {
    return {
        volunteerSelected : state.volunteers.volunteerSelected
    }
}

export default connect (mapStateToProps, { deleteVolunteer })(DeleteVolunteerView);