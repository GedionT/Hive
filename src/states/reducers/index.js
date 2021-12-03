import loggedReducer from './isLogged';
import userReducer from './user';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  logged: loggedReducer,
  user: userReducer,
});

export default allReducers;
