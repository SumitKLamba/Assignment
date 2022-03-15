import { takeLatest } from "redux-saga/effects";
import { handleGetBlog } from "./handlers/blogs";
import { LOAD_BLOG_LOADING } from "../reducers/blogs";

//All the sagas
export function* rootSaga() {
  //executing the function handleGetBlog if the action LOAD_BLOG_LOADING gets dispatched
  yield takeLatest(LOAD_BLOG_LOADING, handleGetBlog);
}
