import { takeLatest } from "redux-saga/effects";
import { handleGetBlog } from "./handlers/blog";
import { GET_BLOG } from "../reducers/blogs";

export function* rootSaga() {
  yield takeLatest(GET_BLOG, handleGetBlog);
}