
import { createStore } from 'redux';
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
})
store.subscribe(() => console.log(store.getState()))
export default store