import React from 'react';

import {connect } from 'react-redux';
import { List } from 'semantic-ui-react';

import { getOneVolunteer } from '../../actions/VolunteerActions';

import VolunteerInfoDisplay from './VolunteerInfoDisplay';

class SearchResultDisplay extends React.Component {
    componentDidUpdate () {
        this.renderSearchResults();
    }    

    renderSearchResults () {
        if (this.props.searchVolunteers.length === 0){
            return (
                <div>
                    <h5>No Results Found</h5>
                </div>
            )
        }else if(this.props.searchVolunteers !== null) {
            return this.props.searchVolunteers.map(volunteer => {
                return (
                    <VolunteerInfoDisplay
                        key={volunteer._id}
                        firstName={volunteer.firstName}
                        lastName={volunteer.lastName}
                        backGroundCheck={volunteer.backGroundCheck}
                        emailAddress={volunteer.emailAddress}
                        phoneNumber={volunteer.phoneNumber}
                        ministries={volunteer.ministries}
                        preferences={volunteer.preferences}
                    />
                    // <div key={volunteer._id} className='ui celled list'>
                    //     <div>
                    //         Name: {volunteer.firstName} {volunteer.lastName}
                    //     </div>
                    //     <div>
                    //         E-mail Address: {volunteer.emailAddress}
                    //     </div>
                    //     <div>
                    //         Has a Valid Background Check: <b> {volunteer.backGroundCheck.toString()}</b>    
                    //     </div>                        
                    // </div>
                )
            })
        }
    }

    render () {
        return (
            <div >
                <div>
                    <h4 >Results:</h4>                
                </div>
                <List celled>
                    {this.renderSearchResults()}            
                </List>
            
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {        
        searchVolunteers : state.volunteers.searchVolunteers
    }
}

export default connect ( mapStateToProps, { getOneVolunteer })(SearchResultDisplay);