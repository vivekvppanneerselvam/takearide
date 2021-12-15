import { combineReducers } from 'redux'
import { HomeReducer as home } from "../../modules/home/action";
import { TrackDriverReducer as trackDriver } from "../../modules/trackdriver/action";
import SignUpReducer from '../../modules/signup/reducer'
import LoginReducer from '../../modules/login/reducer'
import HistoryReducer from '../../modules/history/reducer'
export const rootReducer = combineReducers({
    home,
    trackDriver,
    SignUpReducer: SignUpReducer,
    LoginReducer:LoginReducer,
	HistoryReducer:HistoryReducer
})