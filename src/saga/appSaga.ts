import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
function* foo(action: any) {
    try {
        const data = yield call(() => fetch('https://api.github.com/users/zhouchao941105').then(res => res.json()))
        yield put({ type: 'LOADUSERSUCC', data })
    } catch (e) {
        yield put({ type: 'LOADUSERFAIL', message: e.message })
    }
}
function* loadUser() {
    yield takeLatest("LOADUSER", foo)
}
function* follow(action: any) {
    try {
        const data = yield call(() => fetch(action.url).then(res => res.json()))
        yield put({ type: 'LOADFOLLOWERSUCC', data })
    } catch (e) {
        yield put({ type: 'su' })
    }
}
function* loadFollow() {
    yield takeLatest('LOADFOLLOWER', follow)
}
export { loadUser, loadFollow }