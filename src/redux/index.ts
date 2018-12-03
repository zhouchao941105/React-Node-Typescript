
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { loadUser, loadFollow } from '../saga/appSaga'
import reducer from './reducer';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(loadUser)
sagaMiddleware.run(loadFollow)
store.subscribe(() => console.log(store.getState())) // 当action.type没有match到，进入default分支，这个监听依然会被触发
export default store