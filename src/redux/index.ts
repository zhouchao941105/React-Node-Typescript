
import { createStore } from 'redux';
export default createStore((state, action) => {
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