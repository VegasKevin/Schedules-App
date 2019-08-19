import React from 'react';
//import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import history from '../../history';

class SchedulesMainView extends React.Component {

    
    render () {
        return (
            <div>
                <div display='flex' justifycontent="center">
                    <Button color='blue' onClick={() => history.push("/schedules/createnewschedule")}>Initialize New Schedule</Button>       
                </div>
            </div>
        );
    };
}

export default SchedulesMainView;