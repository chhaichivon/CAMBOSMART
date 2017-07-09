import { createStore, applyMiddleware } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import { reducers } from "./app/reducers/index";
import { sagas } from "./app/sagas/index";

// declare middlewares list
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

// export
export { store, history };