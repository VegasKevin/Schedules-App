import history from '../history';
import schedules_Axios from '../apis/schedulesAPI';

import {
    CREATE_SCHEDULE,
    DELETE_SCHEDULE,
    GET_ALL_SCHEDULES,
    GET_ONE_SCHEDULE,
    UPDATE_SCHEDULE,
    SCHEDULE_SELECTED,
    ERROR_GENERATED
} from './types';


//Instead of using formValues, I would like to send a 'template Object' of a Schedule to create a Schedule.
//This template would likely have a ministryArray with names of ministries; within the ministries array could be 
//a RoleArray that would have names for each of the roles.
export function createSchedules (formValues /*templateObject*/) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch ({ type: CREATE_SCHEDULE, payload : success.data});
            return success;
        }
        function onError(error) {
            dispatch({ type: ERROR_GENERATED, error});
            return error;
        }
        try {
            const success = await schedules_Axios.post("/", { formValues /*templateObject */});  //not certain if I'm going to use form values
            return onSuccess(success);
        } catch(error){
            return onError(error);
        }
    }
}