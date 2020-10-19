import { ActionType, getType, PayloadAction } from "typesafe-actions";
import  {emptyData, loadWeatherDataAsync} from "./actions";
import { dayWeatherData } from "../types";
export type Action = ActionType<typeof loadWeatherDataAsync>;

type State = Array<dayWeatherData>

const weatherData = (state: State = [], action: Action): State => {
  switch (action.type) {
    case getType(loadWeatherDataAsync.success): {
      const {payload} =  action
      return [...state, payload as dayWeatherData];
    }

    case getType(loadWeatherDataAsync.failure): {
      const { name, message } = (action as PayloadAction<
        string,
        Error
      >).payload;
      console.log("game data error", name, message);
      return [];
    }
    case emptyData().type: {
      return []
    }

    default:
      return state;
  }
};
export default weatherData;
