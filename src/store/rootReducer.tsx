import { combineReducers } from "redux";
import weatherData from "./weatherData/reducer";
import settings from "./settings/reducer";

const rootReducer = combineReducers({
  weatherData,
  settings,
});

export default rootReducer;
