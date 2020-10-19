import { createAsyncAction } from "typesafe-actions";
import {
  actionTypes
} from "../../constants";
import {dayWeatherData, RequestPayload} from '../types'

const loadWeatherDataAsync = createAsyncAction(
  actionTypes.FETCH_WEATHER_DATA_REQUEST,
  actionTypes.FETCH_WEATHER_DATA_SUCCESS,
  actionTypes.FETCH_WEATHER_DATA_FAILURE
)<RequestPayload, dayWeatherData , Error>();

export const emptyData = ()=>({type:actionTypes.EMPTY_DATA})
export { loadWeatherDataAsync };
