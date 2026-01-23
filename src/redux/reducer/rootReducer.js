import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
    counter: counterReducer,
    userEric : userReducer
});

export default rootReducer;