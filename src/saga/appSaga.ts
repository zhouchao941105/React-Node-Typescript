import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
function* foo(action: any) {
    try {
        const data = yield call(() => fetch('/list').then(res => res.text()))
        yield put({ type: 'LOADUSERSUCC', data })
    } catch (e) {
        debugger
        yield put({ type: 'LOADUSERFAIL', message: e.message })
    }
}
function* appSaga() {
    yield takeLatest("LOADUSER", foo)
}
export default appSaga