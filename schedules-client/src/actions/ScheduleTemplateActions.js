//import history from '../history';

import {
    ADD_MINISTRY,
    ADD_ROLE,
    CHANGE_NUMBEROFSERVICES,
    ADD_BACKGROUNDCHECK,
    DELETE_ROLE,
    CHANGE_CREATEMINISTRYTITLE,
    CLEAR_CREATEMINISTRYTITLE,
    CLEAR_ROLESARRAY,
    FINALIZE_SCHEDULE_TEMPLATE,
    ERROR_GENERATED,
    CHANGE_SCHEDULETEMPLATENAME,    
} from './types';

import history from '../history';
import schedulesTemplate_Axios from '../apis/schedulesTemplateAPI';

//Adds ministry Object to the ministry array in the Schedule Template store. Clears rolesArray in Schedule Template Store
export function addMinistry (newMinistry) {  //Do I want newMinistry to be a Ministry Object? a name? or something else?
    return dispatch => {
        dispatch( { type: ADD_MINISTRY, payload: newMinistry })
        dispatch({ type: CLEAR_ROLESARRAY  })
        dispatch({ type: CLEAR_CREATEMINISTRYTITLE })
    }
}

//This clears the rolesArray for a Ministry in the process of being created.  This is intially called from AddMinistryView.js red 'cancel' button
export function clearRolesArray (){
    return dispatch => {
        dispatch ({ type: CLEAR_ROLESARRAY });
    }
}

//Adds a role object to the rolesArray array in Schedule Template Store
export function addRole (newRole) {
    return (dispatch) => {
        dispatch ({ type: ADD_ROLE, payload : newRole });
    }
}

//Deletes a specific role from the rolesArray
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

//Chnages the numberOfServices values for the Schedule Template
export function changeNumberOfServices (newNumServices) {
    return (dispatch) => {
        dispatch ({ type: CHANGE_NUMBEROFSERVICES, payload : newNumServices});
    }
}

//Changes the title of the ministry being created
export function changeCreateMinistryTitle (event, newMinistryTitle) {
    event.preventDefault();  //This prevents a form popup to 'fill out a required field' when the 'Add Ministry to Template' Button is clicked in AddMinistryView.js
    return (dispatch) => {
        dispatch ({ type: CHANGE_CREATEMINISTRYTITLE, payload : newMinistryTitle });
    }
}

export function finalizeScheduleTemplate (templateObject) {
    return async dispatch => {
        function onSuccess(success){
            dispatch ({ type: FINALIZE_SCHEDULE_TEMPLATE, payload : success });
            history.push("/settings/createtemplate")
            return success;
        }
        function onError(error){
            dispatch({ type: ERROR_GENERATED, error });
            return error;
        }
        try {
            console.log("tempObject action: " + JSON.stringify(templateObject));
            const success = await schedulesTemplate_Axios.post("/", templateObject);
            return onSuccess(success);
        } catch(error){
            return onError(error);
        }
    }
}

export function changeScheduleTemplateName (templateName) {
    return (dispatch) => {
        dispatch({ type: CHANGE_SCHEDULETEMPLATENAME, payload : templateName  });
    }
}