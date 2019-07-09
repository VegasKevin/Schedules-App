import React from 'react';
import { Link } from 'react-router-dom';
import VolunteerListView from './VolunteerListView';

//import Create_Volunteer_View from './Create_Volunteer_View';

class Main_Volunteers_View extends React.Component{
    render() {
        return (
            <div>
                <div>
                    main_Volunteers_View
                </div>
                <Link to="/volunteers/create"
                    className='ui button'>
                        Create New Volunteer
                </Link>
                
                {    <VolunteerListView/>}
                
                
            </div>
        );
    }
}

export default Main_Volunteers_View;