import _ from 'lodash';
 
import {
    ADD_MINISTRY,
    ADD_ROLE,
    CHANGE_NUMBEROFSERVICES
} from '../actions/types';

let INITIAL_STATE = {
    ministryArray : [],
    numberOfServices : 0
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case ADD_MINISTRY: {
            return {...state, ministryArray : action.payload };
        }   
        case ADD_ROLE : {
            return { ...state, [action.payload] : action.payload };
        }
        case CHANGE_NUMBEROFSERVICES : {
            return {...state, /*[action.payload]*/numberOfServices : action.payload };
        }
        default : {
            return state;
        }

    }
}