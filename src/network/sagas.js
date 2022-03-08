import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import {loadBlogs, LOAD_BLOGS_ERROR, LOAD_BLOGS_LOADING, LOAD_BLOGS_SUCCESS} from "./actions";
import Api from './api';

async function fetchAsync(func) {
   const response = await func();
    
   if (response.ok) {
       return await response.json();
   }
    
   throw new Error("Unexpected error!!!");
}

function* fetchBlogs() {
   try {
       const blogs = yield fetchAsync(Api.getBlogs);
       console.log(blogs);
       yield put({type: LOAD_BLOGS_SUCCESS, data: blogs});
   } catch (e) {
       yield put({type: LOAD_BLOGS_ERROR, error: e.message});
   }
}

export function* blogsSaga() {
   // Allows concurrent fetches of users
   yield takeEvery(LOAD_BLOGS_LOADING, fetchBlogs);
    
   // Does not allow concurrent fetches of users
   // yield takeLatest(LOAD_BLOGS_LOADING, fetchUser);
}

export default blogsSaga;