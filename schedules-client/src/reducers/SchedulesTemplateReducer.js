import _ from 'lodash';
import * as util from 'util';
import { inspect } from 'util';
 
import {
    ADD_MINISTRY,
    ADD_ROLE,
    CHANGE_NUMBEROFSERVICES,
    ADD_BACKGROUNDCHECK,
    DELETE_ROLE,
    CHANGE_CREATEMINISTRYTITLE,
    CLEAR_ROLESARRAY,
    FINALIZE_SCHEDULE_TEMPLATE
} from '../actions/types';

let INITIAL_STATE = {
    ministryArray : [],
    backGroundCheckArray : [], 
    rolesArray : [],
    numberOfServices : 0,
    creatingMinistryTitle : ""
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        /**
         * This payload from this field is in components/scheduleTemples/CreateTemplateView
         * This recieves an array of Ministry Names, and it returns a new set of Objects with the Ministry Name.
         * This does not update the existing array or add to it, it replaces it
         *  */
        case ADD_MINISTRY: {
            return {
                ...state,
                ministryArray : [...state.ministryArray, action.payload]
            }
        }   

        case ADD_ROLE : {
            return { ...state,
                    rolesArray: [...state.rolesArray, action.payload]
            }
        }
        
        case DELETE_ROLE : {
            return { ...state, rolesArray : state.rolesArray.filter(role => role.roleName !== action.payload)}
        }

        case CLEAR_ROLESARRAY: {
            return { ...state, rolesArray : [] }
        }
        case ADD_BACKGROUNDCHECK : {
            if (!state.backGroundCheckArray.some(roleObject => (roleObject.roleName === action.payload.roleName && roleObject.parentMinistry === action.payload.parentMinistry ) )){//(state.backGroundCheckArray.length === 0){
                return {
                    ...state,
                    backGroundCheckArray: 
                    [...state.backGroundCheckArray, action.payload]
                }                
            }
            else {
                return {
                    ...state,
                    backGroundCheckArray: state.backGroundCheckArray.map((roleObject, index) =>                     
                        (roleObject.roleName === action.payload.roleName && roleObject.parentMinistry === action.payload.parentMinistry) ?
                            {...roleObject, isRequired : action.payload.isRequired} : roleObject   
                    )
                }
            }
        }        
        case CHANGE_NUMBEROFSERVICES : {
            return {...state, numberOfServices : action.payload };
        }

        case CHANGE_CREATEMINISTRYTITLE:{
            return {...state, creatingMinistryTitle : action.payload };
        }
        case FINALIZE_SCHEDULE_TEMPLATE : {
            
        }
        default : {
            return state;
        }

    }
}