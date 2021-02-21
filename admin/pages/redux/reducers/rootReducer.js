
import { combineReducers } from "redux";
import userLoginReducer from "../../Container/AuthPage/modules/reducer";


const rootreducer = combineReducers({
  userLoginReducer,
});

export default rootreducer;
