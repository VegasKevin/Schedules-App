import _ from 'lodash';

import {
    CREATE_VOLUNTEER,
    DELETE_VOLUNTEER, 
    UPDATE_VOLUNTEER, 
    GET_ALL_VOLUNTEERS, 
    GET_ONE_VOLUNTEER
} from '../actions/types';

export default ( state = { }, action ) => {
    switch(action.type) {
        case CREATE_VOLUNTEER:{
            console.log(action.payload)
            return { ...state, [action.payload] : action.payload};
        }
        case DELETE_VOLUNTEER:
            return _.omit(state, action.payload);
        case UPDATE_VOLUNTEER:
            return {...state, [action.payload.id] : action.payload };
        case GET_ALL_VOLUNTEERS:
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case GET_ONE_VOLUNTEER:{
            console.log("payload.id: "  + JSON.stringify(action.payload));
            return {...state, ..._.mapKeys(action.payload, '_id')};//[action.payload] : action.payload};
        }
        default:
            return state;
    }
}