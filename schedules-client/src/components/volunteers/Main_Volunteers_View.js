import React from 'react';
import { Link } from 'react-router-dom';

import VolunteerListView from './VolunteerListView';
import SearchVolunteerView from './SearchVolunteerView';

//import Create_Volunteer_View from './Create_Volunteer_View';

class Main_Volunteers_View extends React.Component{
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
                        onSubmit={this.onSubmit} />
                </div>
                
                
            </div>
        );
    }
}

export default Main_Volunteers_View;