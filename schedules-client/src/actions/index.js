import history from '../history';
import volunteers_Axios from '../apis/volunteers_API';

import {
    CREATE_VOLUNTEER,
    DELETE_VOLUNTEER,
    UPDATE_VOLUNTEER,
    GET_ALL_VOLUNTEERS,
    GET_ONE_VOLUNTEER
} from './types';

export const createVolunteer = (formValues) => async (dispatch) => {
    const response = await volunteers_Axios.post("/" , { ...formValues })
    .then(function(response) {
        console.log(response);
    })

    dispatch ({ type : CREATE_VOLUNTEER, payload : response });
    history.push('/volunteers');
}

export const getAllVolunteers = () => async (dispatch) => {
    const response = await volunteers_Axios.get("/")
    // .then(function(response){
    //     console.log(response);
    // })
    dispatch ({ type: GET_ALL_VOLUNTEERS, payload : response.data });
    //history.push('/volunteers');
}