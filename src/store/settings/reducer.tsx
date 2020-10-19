import { getType } from "typesafe-actions";
import { actionTypes } from "../../constants";
import { Languages } from "../types";
import { loadWeatherDataAsync } from "../weatherData/actions";
import { setLanguage, toggleLoading } from "./actions";

interface State {
  language: Languages;
  isLoading: boolean;
}

const initialState = {
  language: Languages.English,
  isLoading: false,
};

export default function (
  state: State = initialState,
  action: { type: string }
): State {
  switch (action.type) {
    case actionTypes.TOGGLE_LOADING:
      const {isLoading} = action as ReturnType<typeof toggleLoading>;
      return {...state, isLoading}
      case actionTypes.SET_LANGUAGE:
        const {language} = action as ReturnType<typeof setLanguage>;
        return {...state, language}
    case getType(loadWeatherDataAsync.failure):
      return {...state, isLoading: false};
    default:
      return state;
  }
}
