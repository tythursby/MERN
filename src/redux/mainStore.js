import { combineReducers } from "redux";
import wrapperReducer from "./wrapperReducer";
import authReducer from "../shared/components/auth/authReducer";

export default combineReducers({
  wrapperReducer,
  authReducer,
});
