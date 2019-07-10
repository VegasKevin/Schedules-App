import React from 'react';

import { getAllVolunteers } from '../../actions';
import { connect } from 'react-redux';

class VolunteerListView extends React.Component{
        componentDidMount () {
            this.props.getAllVolunteers();            
        }

        renderVolunteerList  () {
            return this.props.volunteers.map(volunteer => {                
                    return (
                        <div key={volunteer._id}>
                            {volunteer.name} {volunteer.firstName} {volunteer.lastName}              
                        </div>
                    )
                });
        }
            
        
        render () {
            return (
                <div>
                    <h2>Names</h2>
                    <div className='ui celled list'>
                        {this.renderVolunteerList()}
                        
                    </div>
                </div>
            );
        };
}

const mapStateToProps = (state) => {
    return {
        volunteers : Object.values(state.volunteers)
    }
}

export default connect(mapStateToProps, { getAllVolunteers })(VolunteerListView);