import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import VolunteerListView from './VolunteerListView';
import SearchVolunteerView from './SearchVolunteerView';
import { getOneVolunteer } from '../../actions';

//import Create_Volunteer_View from './Create_Volunteer_View';
class Main_Volunteers_View extends React.Component{

    renderSearchResults () {
        console.log("searchVolunteers bool: " + this.props.searchVolunteers);
        if(this.props.searchVolunteers){
            console.log("searchVolunteers: " + JSON.stringify(this.props.searchVolunteers));
            return this.props.searchVolunteers.map(volunteer => {
                console.log("~~FIRST: " + volunteer)
                return (
                    <div key={volunteer._id}>
                        {volunteer.firstName} {volunteer.lastName}
                    </div>
                )
            })
        }
        
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div>
                    main_Volunteers_View
                </div>
                <div>
                <Link to="/volunteers/create"
                    className='ui button'>
                        Create New Volunteer
                </Link>
                </div>                
                <div>
                    <VolunteerListView/>
                </div>
                <div>
                    <SearchVolunteerView
                        //onSubmit={this.onSubmit}
                     />
                    
                    <div>
                        {this.renderSearchResults()}
                        hi
                    </div>
                </div>
                
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchVolunteers : state.searchVolunteers
    }
}

export default connect (mapStateToProps, {getOneVolunteer}) (Main_Volunteers_View);