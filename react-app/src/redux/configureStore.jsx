import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import blogsReducer from "./reducers/blogs";
import { rootSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  blogsReducer: blogsReducer, //the first name is the name from which we can access the data by typing state.blogReducers.
});

//applying sagaMiddleware to keep an eye on the actions being dispatched to perform some tasks
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
