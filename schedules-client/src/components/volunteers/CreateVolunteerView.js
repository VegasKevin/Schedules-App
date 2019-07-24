import React from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

//I think I'll need to create each of these action items first
//import { createVolunteer, getVolunteer} from '../../actions/';

import Modal from './Modal';
import history from '../../history';
import CreateVolunteerModalContent from './CreateVolunteerModalContent';
//import { PromiseProvider } from 'mongoose';

import { createVolunteer } from '../../actions';

class CreateVolunteerView extends React.Component {

    onSubmit = formValues => {
        this.props.createVolunteer(formValues);
    }

   render () {
       return (
//    const CreateVolunteerView =  (
        
          <Modal
                title="Create New Volunteer"
                content={<CreateVolunteerModalContent
                            onSubmit={this.onSubmit}
                            onDismiss={() => history.push('/volunteers')}
                        />}
                onDismiss={() => history.push("/volunteers")}
            />
            
            )
            
     //  );
    }
}

// const mapStateToProps = (state) => {
//     return { state}
    
// }

export default connect(null, { createVolunteer })(CreateVolunteerView);