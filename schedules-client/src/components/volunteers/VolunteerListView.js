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
            this.setState({activeIndex : index});
            //console.log("!!!test!!: " + JSON.stringify(this.props.volunteers.volunteers[index]));
            this.props.selectVolunteer(this.props.volunteers.volunteers[index]);
            console.log("volSelected: "  + JSON.stringify(this.props.volunteers.volunteerSelected));
         }

        //  componentDidUpdate () {
        //     // this.props.selectVolunteer(this.props.volunteers.volunteers[this.state.activeIndex]);
             
        //  }

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