import React from 'react';
import { Link } from 'react-router-dom';
 import { connect } from 'react-redux';

import VolunteerListView from './VolunteerListView';
import SearchVolunteerView from './SearchVolunteerView';
// import { getOneVolunteer } from '../../actions';
import SearchResultsDisplay from './SearchResultsDisplay';

//import Create_Volunteer_View from './Create_Volunteer_View';
class Main_Volunteers_View extends React.Component{
    componentWillUpdate () {
        console.log("::::");
        this.renderSearchResultsDisplay()
    }
    
     
        render() {
        return (
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div>
                    main_Volunteers_View
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                    <div>
                    <Link to="/volunteers/create"
                        className='ui button'>
                            Create New Volunteer
                    </Link>
                    </div>
                    <div>
                        <Link to='/volunteers/*****'
                                className='ui button'>
                            Update Volunteer
                        </Link>
                    </div>
                </div>                
                <div>
                    <VolunteerListView/>
                </div>
                <div>
                    <SearchVolunteerView
                        //onSubmit={this.onSubmit}
                     />
                    <SearchResultsDisplay/>
                    
                    

                </div>
                
                
            </div>
        );
    }
}

const mapStateToProps = ({ searchVolunteers}) => {
    return {
        searchVolunteers
    }
}

export default connect (mapStateToProps, {}) (Main_Volunteers_View);