import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const reduxDevToolsExtension =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;

const store = createStore(
  reducers,
  compose(
    tronMiddleware(),
    applyMiddleware(...middlewares),
    reduxDevToolsExtension
  )
);

sagaMiddleware.run(sagas);

export default store;
