
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import sagaIns from '../saga/index'
const sagaMiddleware = createSagaMiddleware()
const store = createStore((state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'STOPLOADING':
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagaIns)
store.subscribe(() => console.log(store.getState()))
export default store