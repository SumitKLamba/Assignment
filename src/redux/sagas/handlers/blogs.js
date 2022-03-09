import { call, put } from "redux-saga/effects";
import { loadBlog } from "../../reducers/blogs";
import { LOAD_BLOG_ERROR, LOAD_BLOG_SUCCESS } from '../../reducers/blogs'
import { requestGetBlog } from "../requests/index";

export function* handleGetBlog() {
  try {
    const response = yield call(requestGetBlog);
    const { data } = response;
    yield put({
      type: LOAD_BLOG_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: LOAD_BLOG_ERROR,
      error: error
    });
  }
}