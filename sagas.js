import { put, takeEvery, all, call } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* helloSaga() {
  console.log('Hello Sage!');
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
