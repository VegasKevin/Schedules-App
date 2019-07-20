import _ from 'lodash';

import {
    CREATE_VOLUNTEER,
    DELETE_VOLUNTEER, 
    UPDATE_VOLUNTEER, 
    GET_ALL_VOLUNTEERS, 
    GET_ONE_VOLUNTEER,
    VOLUNTEER_SELECTED
} from '../actions/types';

const INITIAL_STATE = {    
                    volunteers : [],
                    searchVolunteers : [],
                    volunteerSelected : null
                }

export default ( state =  INITIAL_STATE , action ) => {
    switch(action.type) {
        case CREATE_VOLUNTEER:{
            //console.log(action.payload)
            return { ...state, [action.payload] : action.payload};
        }
        case DELETE_VOLUNTEER:
            return _.omit(state, action.payload);
        case UPDATE_VOLUNTEER:
            return {...state, [action.payload.id] : action.payload };
        case GET_ALL_VOLUNTEERS:{            
            return {
                ...state,
                // ..._.mapKeys(action.payload, '_id')};
                //volunteers : [...state.volunteers, action.payload]
                volunteers : action.payload
            }
        }
        case GET_ONE_VOLUNTEER:{
          //  console.log('payload: ' + JSON.stringify(action.payload));
            //console.log('searchVOls: ' + JSON.stringify(state.searchVolunteers))
            //console.log("reducer State: " + JSON.stringify(action.payload));
            return {...state, 
                searchVolunteers : action.payload
            }//..._.mapKeys(action.payload, '_id')}; 
        }
        case VOLUNTEER_SELECTED : {
            //console.log("reducer payload: " + JSON.stringify(action.payload));
            return {...state, 
                volunteerSelected : action.payload
            }
        }
        default:
            return state;
    }
}