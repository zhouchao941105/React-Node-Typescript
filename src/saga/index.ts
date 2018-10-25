import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
function* foo(action: any) {
    try {
        const data = yield call(() => fetch('/list'))
        yield put({ type: 'SUCCESS', data })
    } catch (e) {
        yield put({ type: 'FAIL', message: e.message })
    }
}
function* firstSaga() {
    yield takeEvery("LOADING", foo)
}
export default firstSaga