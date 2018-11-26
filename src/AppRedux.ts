const initState = {
    loading: true,
    name: 'zc'
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
        }
        case LOADINGFI: {
            return {
                ...state,
                loading: 'diulei',
                name: 'chao'
            }
        }
        default:
            return state
    }
}
export default reducer
