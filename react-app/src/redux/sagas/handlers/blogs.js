import { call, put } from "redux-saga/effects";
import { LOAD_BLOG_ERROR, LOAD_BLOG_SUCCESS } from '../../reducers/blogs'
import { requestGetBlog } from "../requests/index";

export function* handleGetBlog() {
  try {
    const response = yield call(requestGetBlog);
    yield put({
      type: LOAD_BLOG_SUCCESS,
      data: response.data.blogs
    });
  } catch (error) {
    yield put({
      type: LOAD_BLOG_ERROR,
      error: error
    });
  }
}