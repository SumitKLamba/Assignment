import { takeLatest, takeEvery } from "redux-saga/effects";
import { handleGetBlog } from "./handlers/blogs";
import { LOAD_BLOG_LOADING } from "../reducers/blogs";

export function* rootSaga() {
  yield takeLatest(LOAD_BLOG_LOADING, handleGetBlog);
}