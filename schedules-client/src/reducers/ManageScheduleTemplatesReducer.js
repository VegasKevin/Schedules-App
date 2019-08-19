import {
    GET_ALL_SCHEDULETEMPLATES
} from '../actions/types';

let INITIAL_STATE = {
    allScheduleTemplates : []
}

export default ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ALL_SCHEDULETEMPLATES: {
            console.log('get All reducer: ' + JSON.stringify(action.payload));
            return {
                 ...state, allScheduleTemplates : action.payload 
            }
        }
        default : {
            return state;
        }
    }
}