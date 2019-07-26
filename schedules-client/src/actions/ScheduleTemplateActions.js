//import history from '../history';

import {
    ADD_MINISTRY,
    ADD_ROLE,
    CHANGE_NUMBEROFSERVICES
} from './types';

export function addMinistry (newMinistry) {  //Do I want newMinistry to be a Ministry Object? a name? or something else?
    return (dispatch) => {
        dispatch( { type: ADD_MINISTRY, payload: newMinistry });
    }
}

export function addRole (newRole) {
    return (dispatch) => {
        dispatch ({ type: ADD_ROLE, payload : newRole });
    }
}

export function changeNumberOfServices (newNumServices) {
    return (dispatch) => {
        dispatch ({ type: CHANGE_NUMBEROFSERVICES, payload : newNumServices});
    }
}