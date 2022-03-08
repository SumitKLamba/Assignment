import { all } from 'redux-saga/effects'
import blogsSaga from './sagas'

export default function* rootSaga() {
  yield all([
    blogsSaga(),
  ])
}