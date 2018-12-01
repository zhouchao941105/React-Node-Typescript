import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
function* foo(action: any) {
    try {
        const data = yield call(() => fetch('/list'))
        yield put({ type: 'LOADUSERSUCC', data })
    } catch (e) {
        yield put({ type: 'LOADUSERFAIL', message: e.message })
    }
}
function* firstSaga() {
    yield takeEvery("LOADUSER", foo)
}
export default firstSaga