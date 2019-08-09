import _ from 'lodash';
 
import {
    ADD_MINISTRY,
    ADD_ROLE,
    CHANGE_NUMBEROFSERVICES,
    ADD_BACKGROUNDCHECK
} from '../actions/types';

let INITIAL_STATE = {
    ministryArray : 
        [
            //  {
            //     ministryName : "", 
            //     rolesArray : []
            //  }
        ],
        backGroundCheckArray : [], 
    numberOfServices : 0
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        /**
         * This payload from this field is in components/scheduleTemples/CreateTemplateView
         * This recieves an array of Ministry Names, and it returns a new set of Objects with the Ministry Name.
         * This does not update the existing array or add to it, it replaces it
         *  */
        case ADD_MINISTRY: {
            let mapOfNewMinistries = action.payload.map(newMinistry => {
                return ({ "ministryName" : newMinistry, rolesArray : [] });                
            })
            return {...state, 
            ministryArray : /*[...state.ministryArray, */mapOfNewMinistries/*action.payload] */};
        }   

        case ADD_ROLE : 
            console.log("payload: " + action.payload.ministryName)
            return {      //here we spread the current entire state. The we determine ministryArray to change rolesArray if the name matches what was passin the function call.  If it doesn't equal the name, it returns the 'minitry' object without change.  
            //if it is the same, it spreads the ministry object, changes the rolesArray to what was passed in the function call and then returns the updated object.
                       ...state,
                        ministryArray: state.ministryArray.map(ministry =>                     
                         (ministry.ministryName === action.payload.ministryName) ? {...ministry, rolesArray : action.payload.mapOfRoles/*splitRolesArray*/} : ministry                         
                    )
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
                //console.log("1: " + roleObject.roleName === action.payload.roleName + "    2: " +roleObject.parentMinistry === action.payload.parentMinistry)
                return {
                    ...state,
                    backGroundCheckArray: state.backGroundCheckArray.map((roleObject, index) =>                     
                        (roleObject.roleName === action.payload.roleName && roleObject.parentMinistry === action.payload.parentMinistry) ?
                            {...roleObject, isRequired : action.payload.isRequired} : /*[...state.backGroundCheckArray , action.payload]*/roleObject   
                    )
                }
            }

        //     let foundDuplicate = false;
        //     let returnState = null;
        //     //console.log("bgArray stringify: " + JSON.stringify(state.backGroundCheckArray));
        //         state.backGroundCheckArray.map/*forEach*/((roleObject, index) => {
        //             if(roleObject.roleName === action.payload.roleName && roleObject.parentMinistry === action.payload.parentMinistry){
        //                 //roleObject.isRequired = action.payload.isRequired;
        //                 console.log("FOUND DUPLICATE");
        //                 foundDuplicate = true;
                        
        //                 //roleObject.setState ( { isRequired : action.payload.isRequired})
        //                 // console.log("State after dupilicate: " + JSON.stringify(state.backGroundCheckArray))
        //       //          console.log("!!!!!!!!!!!!"+JSON.stringify(state.backGroundCheckArray));
        //                 //state.backGroundCheckArray.setState({ isRequired : action.payload.isRequired})
        //                 console.log("[roleObject]: " + JSON.stringify(state.backGroundCheckArray[index]));
        //                 returnState = {
        //                     ...state,
        //                     backGroundCheckArray: [
        //                         //...state.backGroundCheckArray,
        //                         state.backGroundCheckArray[index], //{
        //                             /*...*///roleObject,
        //                             /*...*/action.payload
        //                             //...state.backGroundCheckArray[index],
        //                             //isRequired : action.payload.isRequired
        //                         //}
        //                             //roleObject,action.payload
        //                     ]
        //                 }
                        
        //                 //return {
        //                     // returnState = {
        //                     //     ...state,
        //                     //     backGroundCheckArray : {
        //                     //     ...state.backGroundCheckArray,
        //                     //         [action.payload.roleName/*roleObject*/] : {
        //                     //             ...state.backGroundCheckArray[/*roleObject*/action.payload.roleName],
        //                     //             /*isRequired: isRequired :*/[ action.payload.roleName] :  action.payload//.isRequired
        //                     //         },
                                        
                                    
        //                     //         /*...*/
        //                     // }//]
        //                     // ...state,
        //                     // backGroundCheckArray: [//{
        //                     //     ...state.backGroundCheckArray,
        //                     //     /*[action.payload.roleName]*/roleObject  //{
        //                     //         ...state.backGroundCheckArray[action.payload.roleName],  [action.payload.roleName] : action.payload
        //                     //          //isRequired : action.payload.isRequired   
        //                     //     // }
        //                     // ]//}
        //                         /*...state,
        //                     backGroundCheckArray: {
        //                         ...state.backGroundCheckArray,

        //                         /*roleObject :  ...roleObject, 'isRequired' : action.payload.isRequired
        //                     }*/
                                
        //                 //}  
                        
        //             }
        //         })
        //     // let foundParentMinistry; //= () => {
        //     //     state.ministryArray.forEach(ministry =>{
        //     //         if(ministry.ministryName === action.payload.parentMinistry) { foundParentMinistry = ministry;}
        //     //     })
        //     // let foundRole;
        //     //     foundParentMinistry.rolesArray.map(role => {
        //     //         if(role.roleName === action.payload.roleName) { foundRole = role;}
        //     //     })
        //     //}
        //     //console.log("~~~~~: " + JSON.stringify(foundParentMinistry))
        //     console.log("action.payload for BGCheck reducer: " + JSON.stringify(action.payload));
        //     console.log("state.ministryArray: " + JSON.stringify(state.ministryArray));
        // //console.log("action.payload.parentministry: " + action.payload.parentMinistry + "     state: " + state.ministryArray[action.payload.parentMinistry].ministryName);
        // // console.log("SECOND STATE");    
        // //if(foundDuplicate){

        // //}
        // /*else*/ if(!foundDuplicate){
        //     returnState = {
        //     //return {
                
        //         ...state,
        //         // backGroundCheckArray : {
        //         //     ...state.backGroundCheckArray,
        //         //         [action.payload] : action.payload
        //         // }
        //         backGroundCheckArray : [...state.backGroundCheckArray , action.payload]
        //        // This worked decently but not quiet
        //         // ...state,
        //         //     ministryArray: {
        //         //         ...state.ministryArray,
        //         //             /*[ state.ministryArray.*///foundParentMinistry/*ministryName === action.payload.parentMinistry]*/: {
        //         //                 ...state.ministryArray.foundParentMinistry,//...state.ministryArray[action.payload.parentMinistry],
        //         //                     ...foundParentMinistry./*...state.ministryArray[action.payload.parentMinistry].*/rolesArray.map(role =>
        //         //                         (role.roleName === action.payload.roleName) ? {...role, "bgCheckRequired" : action.payload.isRequired } : role
        //         //                     )
        //         //             //}
        //         //     }
        //         }
        // }
        // return returnState;
        //break;
        }        
        case CHANGE_NUMBEROFSERVICES : {
            return {...state, numberOfServices : action.payload };
        }
        default : {
            return state;
        }

    }
}