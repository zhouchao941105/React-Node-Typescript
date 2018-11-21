const initState = {
    loading: true,
    name: ''
}
const LOADING = "LOADING"
const LOADINGFI = "LOADINGFI"
export function loaduser() {
    return {
        type: LOADINGFI
    }
}
function reducer(state = initState, action: any) {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: true,
                name: 'zhou'
            }
            break;
        }
        case LOADINGFI: {
            return {
                ...state,
                loading: 'diulei',
                name: 'chao'
            }
            break;
        }
        default:
            return state
    }
}
export default reducer
