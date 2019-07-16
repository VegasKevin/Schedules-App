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
        // console.log("::::");
        // console.log("selected " + this.state.volunteers.volunteerSelected);
       // this.renderSearchResultsDisplay()

    }
    
     
        render() {
        //console.log("selected " + this.props.volunteerSelected);
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
                        {/* <div>{this.props.volunteerSelected.firstName}</div> */}
                        <Link to={(this.props.volunteerSelected !== undefined && this.props.volunteerSelected !== null) ? "/volunteers/update" : "/volunteers"}
                                className='ui button'
                              //  disabled={(this.props.volunteerSelected === null) ? true : false }
                              >
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



const mapStateToProps = (state/*{ searchVolunteers, volunteerSelected}*/) => {
    return {
        searchVolunteers :state.volunteers.searchVolunteers,
        volunteerSelected : state.volunteers.volunteerSelected
    }
}

export default connect (mapStateToProps, null) (Main_Volunteers_View);