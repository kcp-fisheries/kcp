import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

export const rootReducers = combineReducers({
  counterReducer,
});
