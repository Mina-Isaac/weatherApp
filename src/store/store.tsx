import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { StateType } from "typesafe-actions";
import rootReducer from "./rootReducer";
import rootSaga from "./weatherData/sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
export type AppState = StateType<typeof rootReducer>;

export default store;