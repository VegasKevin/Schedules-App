import _ from 'lodash';

import {
    CREATE_SCHEDULE,
    DELETE_SCHEDULE,
    GET_ALL_SCHEDULES,
    GET_ONE_SCHEDULE,
    SCHEDULE_SELECTED,
    UPDATE_SCHEDULE
    } from '../actions/types';

const INITIAL_STATE = {
    scheduleSelected : null,
    allSchedulesArray : []
}

export default ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_SCHEDULE: {
            return {...state};
        }
        case DELETE_SCHEDULE: {
            return {...state};
        }
        case GET_ALL_SCHEDULES: {
            return {...state};
        }
        case GET_ONE_SCHEDULE: {
            return {...state};
        }
        case SCHEDULE_SELECTED: {
            return {...state};
        }
        case UPDATE_SCHEDULE: {
            return {...state};
        }
        default: {
            return state;
        }
    }
}