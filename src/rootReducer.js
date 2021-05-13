import { combineReducers } from "redux";
import loginReducer from './services/Login/reducer'


export default combineReducers({
    login:loginReducer
});