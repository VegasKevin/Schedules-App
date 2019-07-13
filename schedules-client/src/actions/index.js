import history from '../history';
import volunteers_Axios from '../apis/volunteers_API';

import {
    CREATE_VOLUNTEER,
    DELETE_VOLUNTEER,
    UPDATE_VOLUNTEER,
    GET_ALL_VOLUNTEERS,
    GET_ONE_VOLUNTEER,
    ERROR_GENERATED
} from './types';

export function getOneVolunteer (formValues) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({ type: GET_ONE_VOLUNTEER, payload : success.data});
            console.log("success: " + JSON.stringify(success.data));
            return success;
        }
        function onError(error) {
            dispatch({ type: ERROR_GENERATED, error });
            console.log("error: " + error);
            return error;
        }

        try {
            console.log("formValues: " + JSON.stringify(formValues));
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

// export const getAllVolunteers = () => async (dispatch) => {
//     const response = await volunteers_Axios.get("/")
//     // .then(function(response){
//     //     console.log(response);
//     // })
//     dispatch ({ type: GET_ALL_VOLUNTEERS, payload : response.data });
//     //history.push('/volunteers');
// }

// export const createVolunteer = (formValues) => async (dispatch) => {
//     const response = await volunteers_Axios.post("/" , { ...formValues })
//     .then(function(response) {
//         console.log(response);
//     })

//     dispatch ({ type : CREATE_VOLUNTEER, payload : response });
//     history.push('/volunteers');
// }