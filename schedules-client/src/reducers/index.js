import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import authReducer from './authReducer';
import volunteersReducer from './volunteersReducer';
import SchedulesReducer from './SchedulesReducer';
import SchedulesTemplateReducer from './SchedulesTemplateReducer';

export default combineReducers({
    volunteers : volunteersReducer,
    form: formReducer,
    schedules : SchedulesReducer,
    scheduleTemplate : SchedulesTemplateReducer
});