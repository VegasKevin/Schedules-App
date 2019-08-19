import { 
    GET_ALL_SCHEDULETEMPLATES, ERROR_GENERATED
}from './types';

import manageScheduleTemplatesAPI from '../apis/manageScheduleTemplates_API';

export function getAllScheduleTemplates () {
    return async dispatch => {
        function onSuccess (success) {
            console.log("success.data: " + JSON.stringify(success.data));
            dispatch({ type : GET_ALL_SCHEDULETEMPLATES, payload : success.data });
        }
        function onError(error){
            dispatch({ type : ERROR_GENERATED, error });
        }
        try{
            const success = await manageScheduleTemplatesAPI.get("/");
            return onSuccess(success);
        } catch (error) {
            return onError(error);
        }
    }
}