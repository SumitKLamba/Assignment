import { call, put } from "redux-saga/effects";
import { LOAD_BLOG_ERROR, LOAD_BLOG_SUCCESS } from "../../reducers/blogs";
import { requestGetBlog } from "../requests/index";

//getting the data from the server with the help of requestGetBlog function and saving the data or error into the state
export function* handleGetBlog() {
  try {
    const response = yield call(requestGetBlog);
    yield put({
      type: LOAD_BLOG_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_BLOG_ERROR,
      error: error,
    });
  }
}
