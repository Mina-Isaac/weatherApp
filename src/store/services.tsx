import {
  HISTORICAL_BASE_URL,
  CURRENT_BASE_URL,
  APP_ID,
  EXCLUDED_FIELDS,
} from "../constants";
import { RequestPayload, APIResponse } from "./types";

const appServices = {
  getHistoricalWeatherData(params: RequestPayload): Promise<APIResponse> {
    const paramString = Object.entries(params)
      .map((item) => item.join("="))
      .join("&");
    return fetch(
      `${HISTORICAL_BASE_URL}${paramString}&appid=${APP_ID}`
    ).then((res) => res.json());
  },
  getCurrentlWeatherData(
    params: Omit<RequestPayload, "dt">
  ): Promise<APIResponse> {
    const paramString = Object.entries(params)
      .map((item) => item.join("="))
      .join("&");
    const excludedFieldsParam = EXCLUDED_FIELDS.join(",");
    return fetch(
      `${CURRENT_BASE_URL}${paramString}&${excludedFieldsParam}&appid=${APP_ID}`
    ).then((res) => res.json());
  },
};

export type Services = typeof appServices;
export default appServices;
