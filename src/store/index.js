import { combineReducers } from "redux";
import { getRepoReducer } from "./reducer/getRepoReducer";
import { getUserReducer } from "./reducer/getUserReducer";

export default combineReducers({
  getRepoReducer,
  getUserReducer,
});
