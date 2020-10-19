const HISTORICAL_BASE_URL =
  "https://api.openweathermap.org/data/2.5/onecall/timemachine?";
const CURRENT_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const APP_ID = "75f972b80e26f14fe6c920aa6a85ad57";
export const ICON_URL = "http://openweathermap.org/img/wn/";
const EXCLUDED_FIELDS = ["minutely", "hourly", "daily", "alerts"];

const actionTypes = {
  //data actions
  FETCH_WEATHER_DATA_REQUEST: "FETCH_WEATHER_DATA_REQUEST",
  FETCH_WEATHER_DATA_SUCCESS: "FETCH_WEATHER_DATA_SUCCESS",
  FETCH_WEATHER_DATA_FAILURE: "FETCH_WEATHER_DATA_FAILURE",

  //settings actions
  EMPTY_DATA: "EMPTY_DATA",
  TOGGLE_LOADING: "TOGGLE_LOADING",
  SET_LANGUAGE: "SET_LANGUAGE",
};

export {
  HISTORICAL_BASE_URL,
  CURRENT_BASE_URL,
  EXCLUDED_FIELDS,
  APP_ID,
  actionTypes,
};

//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=35.685&lon=139.7514&dt=1602763102&units=metric&lang=ar&appid=75f972b80e26f14fe6c920aa6a85ad57
