import { emptyData, loadWeatherDataAsync } from "./actions";
import { toggleLoading } from "../settings/actions";
import { ActionType, getType } from "typesafe-actions";
import appServices from "../services";

import { call, put, takeLatest } from "redux-saga/effects";
import { APIResponse } from "../types";

function* fetchSearchResult(
  action: ActionType<typeof loadWeatherDataAsync.request>
) {
  yield put(emptyData());
  yield put(toggleLoading(true));
  try {
    const { dt, ...rest } = action.payload;
    const current = yield call(appServices.getCurrentlWeatherData, rest);
    yield put(loadWeatherDataAsync.success(current.current));
  } catch (err) {
    yield put(loadWeatherDataAsync.failure(err));
  }
  for (let i = 1; i <= 4; i++) {
    const modifiedPayload = {
      ...action.payload,
      dt: action.payload.dt - i * 24 * 60 * 60,
    };
    try {
      const result: APIResponse = yield call(
        appServices.getHistoricalWeatherData,
        modifiedPayload
      );
      yield put(loadWeatherDataAsync.success(result.current));
    } catch (err) {
      yield put(loadWeatherDataAsync.failure(err));
    }
  }
  yield put(toggleLoading(false));
}

function* rootSaga() {
  yield takeLatest(getType(loadWeatherDataAsync.request), fetchSearchResult);
}
export default rootSaga;
