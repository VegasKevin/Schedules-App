import history from '../history';
import volunteers_Axios from '../apis/volunteers_API';

import {
    CREATE_VOLUNTEER,
    DELETE_VOLUNTEER,
    UPDATE_VOLUNTEER,
    GET_ALL_VOLUNTEERS,
    GET_ONE_VOLUNTEER,
    ERROR_GENERATED,
    VOLUNTEER_SELECTED
} from './types';

export function getOneVolunteer (formValues) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({ type: GET_ONE_VOLUNTEER, payload : success.data});
            return success;
        }
        function onError(error) {
            dispatch({ type: ERROR_GENERATED, error });
            return error;
        }
        try {
            const success = await volunteers_Axios.post("/search", { ...formValues });            
            return onSuccess(success);
        } catch(error){
            return onError(error);
        }
    }
}

export function createVolunteer (formValues){
    return async dispatch => {
        function onSuccess(success) {
            dispatch({ type: CREATE_VOLUNTEER, payload : success});
            history.push("/volunteers");
            return success;
        }

        function onError(error){
            dispatch({ type : ERROR_GENERATED, error });
            return error;
        }
        try {
            const success = await volunteers_Axios.post("/", { ...formValues });
            return onSuccess(success);
        } catch(error) {
            return onError(error);
        }
    }
}
export function getAllVolunteers () {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({ type : GET_ALL_VOLUNTEERS, payload : success.data})
            return success;
        }

        function onError(error) {
            dispatch({ type: ERROR_GENERATED, error});
            return error;
        }
        try{
            const success = await volunteers_Axios.get('/');
            return onSuccess(success);
        } catch (error) {
            return onError(error);
        }
    }
}

export function updateVolunteer (formValues) {
    return async dispatch => {
        function onSuccess(success) {
        dispatch({ type: UPDATE_VOLUNTEER, payload: success.data})
            history.push('/volunteers')
            return success;
        }
        function onError(error) {
            dispatch({ type: ERROR_GENERATED, error})
            return error;
        } 
        try {
            const success = await volunteers_Axios.patch('/', {...formValues});
            return onSuccess(success);
        }catch(error) {
            return onError(error);
        }
    }
}

export function deleteVolunteer (_id) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({ type: DELETE_VOLUNTEER, payload : success.data})
            history.push("/volunteers")
            return success;
        }
        function onError(error) {
            dispatch({ type: ERROR_GENERATED, error})
            return error;
        }
        try { 
            const success = await volunteers_Axios.delete('/', {data : {"_id" : _id} });
            return onSuccess(success)
        } catch (error) {
            return onError(error);
        }
    }
}

export function selectVolunteer (selectedVolunteer) {
    return (dispatch) => {
        dispatch( { type: VOLUNTEER_SELECTED, payload : selectedVolunteer})
    }        
}