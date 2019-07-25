import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import authReducer from './authReducer';
import volunteersReducer from './volunteersReducer';
import SchedulesReducer from './SchedulesReducer';

export default combineReducers({
    volunteers : volunteersReducer,
    form: formReducer,
    schedules : SchedulesReducer
});