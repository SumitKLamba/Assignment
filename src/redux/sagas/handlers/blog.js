import { call, put } from "redux-saga/effects";
import { setBlog } from "../../reducers/blogs";
import { requestGetBlog } from "../requests/index";

export function* handleGetBlog(action) {
  try {
    const response = yield call(requestGetBlog);
    const { data } = response;
    yield put(setBlog(data));
  } catch (error) {
    console.log(error);
  }
}