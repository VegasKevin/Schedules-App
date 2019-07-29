import _ from 'lodash';
 
import {
    ADD_MINISTRY,
    ADD_ROLE,
    CHANGE_NUMBEROFSERVICES
} from '../actions/types';

let INITIAL_STATE = {
    ministryArray : 
        [
            //  {
            //     ministryName : "", 
            //     rolesArray : []
            //  }
        ],
    numberOfServices : 0
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        /**
         * This payload from this field is in components/scheduleTemples/CreateTemplateView
         * This recieves an array of Ministry Names, and it returns a new set of Objects with the Ministry Name.
         * This does not update the existing array or add to it, it replaces it
         *  */
        case ADD_MINISTRY: {
            let mapOfNewMinistries = action.payload.map(newMinistry => {
                return ({ "ministryName" : newMinistry });                
            })
            return {...state, 
            ministryArray : /*[...state.ministryArray, */mapOfNewMinistries/*action.payload] */};
        }   

        case ADD_ROLE : 
            console.log("payload: " + action.payload.ministryName)
            return {      //here we spread the current entire state. The we determine ministryArray to change rolesArray if the name matches what was passin the function call.  If it doesn't equal the name, it returns the 'minitry' object without change.  
            //if it is the same, it spreads the ministry object, changes the rolesArray to what was passed in the function call and then returns the updated object.
                       ...state,
                        ministryArray: state.ministryArray.map(ministry =>                     
                         (ministry.ministryName === action.payload.ministryName) ? {...ministry, rolesArray : action.payload.splitRolesArray} : ministry                         
                    )
            }        
        case CHANGE_NUMBEROFSERVICES : {
            return {...state, numberOfServices : action.payload };
        }
        default : {
            return state;
        }

    }
}