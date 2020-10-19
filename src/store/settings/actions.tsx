import { actionTypes } from "../../constants";
import { Languages } from "../types";

export const toggleLoading = (isLoading:boolean) => ({ type: actionTypes.TOGGLE_LOADING, isLoading });
export const setLanguage = (language:Languages) => ({ type: actionTypes.SET_LANGUAGE, language });
