import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import blogsReducer from "./reducers/blogs";
import { rootSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  blogsReducer: blogsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
