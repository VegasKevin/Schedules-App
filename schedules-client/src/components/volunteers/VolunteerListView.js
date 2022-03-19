import React from 'react';

import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

import { getAllVolunteers, selectVolunteer } from '../../actions/VolunteerActions';
import  VolunteerInfoDisplay  from './VolunteerInfoDisplay';


class VolunteerListView extends React.Component{

        state = {
            activeIndex : false
        }
        
        componentDidMount () {
            this.props.getAllVolunteers();            
        }

        handleToggle (index) {
            this.setState({ activeIndex : index });
            console.log("!!!test!!: " + JSON.stringify(this.props.volunteers.volunteers[index]));
            this.props.selectVolunteer(this.props.volunteers.volunteers[index]);
             console.log("volSelected: "  + JSON.stringify(this.props.volunteers.volunteerSelected));
         }


        /* I would like to unhighlight the Volunteer list item selected when something else is click on the screen. I will explore the
         'onBlur' event to do this
         -----This like will be challenging since the onBlur is used for input fields - this is not for input.
         */
         handle_On_Blur (index) {
            //Attempting to set index to null to remove highlight
           this.setState({ activeIndex : false });
           console.log("Onblur - index: " + index  + "   activeIndex: " + this.activeIndex);

           //Removes the SelectVolunteer data potentially stored
           this.props.selectVolunteer(null);
        }        
        /*End OnBlur */

         handleToggle = this.handleToggle.bind(this);        
         handle_On_Blur = this.handle_On_Blur.bind(this);

         

         renderVolunteerList  () {            
            var active = this.state.activeIndex;
            console.log("active: " + active);
            return this.props.volunteers.volunteers.map(function(volunteer, index)  {                

                    if(volunteer._id !== undefined && volunteer._id !== null){
                        return (
                            <VolunteerInfoDisplay
                                active={index === active}
                                onToggle={this.handleToggle.bind(null, index)}
                                onBlur={this.handle_On_Blur.bind(null,index)}
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
                    <p>
                        <h2>Names</h2>
                        "VolunteerListView.js"
                    </p>
                    <div>
                        <List className='ui celled selection list'>                            
                            {this.renderVolunteerList()}                        
                        </List>                       
                    </div>
                </div>
            );
        };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         selectVolunteer : (volunteerSelected) => {dispatch(selectVolunteer(volunteerSelected))},
//         getAllVolunteers : () => {dispatch(getAllVolunteers())}
//     }
// }

const mapStateToProps = ( state/*{ volunteers, volunteerSelected }*/ ) => {
    return {
        volunteers : state.volunteers,
        volunteerSelected : state.volunteers.volunteerSelected
    }
}

export default connect(mapStateToProps, { getAllVolunteers, selectVolunteer })(VolunteerListView);