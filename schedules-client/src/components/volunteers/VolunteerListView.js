import React from 'react';

import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

import { getAllVolunteers } from '../../actions';
import  VolunteerInfoDisplay  from './VolunteerInfoDisplay';

class VolunteerListView extends React.Component{

        state = {
            activeIndex : false
        }
        
        componentDidMount () {
            this.props.getAllVolunteers();            
        }

        handleToggle (index) {
            this.setState({activeIndex : index});
         }

         handleToggle = this.handleToggle.bind(this);        

         renderVolunteerList  () {            
            var active = this.state.activeIndex;
            return this.props.volunteers.volunteers.map(function(volunteer, index)  {                

                    if(volunteer._id !== undefined && volunteer._id !== null){
                        return (
                            <VolunteerInfoDisplay
                                active={index === active}
                                onToggle={this.handleToggle.bind(null, index)}
                                key={volunteer._id}
                                firstName={volunteer.firstName}
                                lastName={volunteer.lastName}
                                _id = {volunteer._id}
                            />
                        )                                            
                    } else {
                        return (<div></div>)
                    }                    
                }, this);
        }
            
        
        render () {
            return (
                <div>
                    <h2>Names</h2>
                    <div>
                        <List className='ui celled selection list'>                            
                            {this.renderVolunteerList()}                        
                        </List>                       
                    </div>
                </div>
            );
        };
}

const mapStateToProps = ( { volunteers } ) => {
    return {
        volunteers
    }
}

export default connect(mapStateToProps, { getAllVolunteers })(VolunteerListView);