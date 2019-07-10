import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import authReducer from './authReducer';
import volunteersReducer from './volunteersReducer';

export default combineReducers({
    volunteers : volunteersReducer,
    form: formReducer
});