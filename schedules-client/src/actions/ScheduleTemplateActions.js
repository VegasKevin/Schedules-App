//import history from '../history';

import {
    ADD_MINISTRY,
    ADD_ROLE,
    CHANGE_NUMBEROFSERVICES,
    ADD_BACKGROUNDCHECK,
    DELETE_ROLE,
    CHANGE_CREATEMINISTRYTITLE,
    CLEAR_ROLESARRAY
} from './types';

import history from '../history';

export function addMinistry (newMinistry) {  //Do I want newMinistry to be a Ministry Object? a name? or something else?
    return dispatch => {
        dispatch( { type: ADD_MINISTRY, payload: newMinistry })
        // .then (history.push('/settings/createtemplate'))
        dispatch({ type: CLEAR_ROLESARRAY  })
    }
}

export function addRole (newRole) {
    return (dispatch) => {
        dispatch ({ type: ADD_ROLE, payload : newRole });
    }
}

export function deleteRole (roleName) {
    return (dispatch) => {
        dispatch ({ type: DELETE_ROLE, payload : roleName });
    }
}

export function addBackGroundCheck(newBGCheck) {
    return (dispatch) => {        
        dispatch({  type: ADD_BACKGROUNDCHECK, payload: newBGCheck});
    }
}

export function changeNumberOfServices (newNumServices) {
    return (dispatch) => {
        dispatch ({ type: CHANGE_NUMBEROFSERVICES, payload : newNumServices});
    }
}

export function changeCreateMinistryTitle (newMinistryTitle) {
    return (dispatch) => {
        dispatch ({ type: CHANGE_CREATEMINISTRYTITLE, payload : newMinistryTitle });
    }
}