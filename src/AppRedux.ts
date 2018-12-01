const initState = {
    loading: true,
    name: 'zc'
}
const LOADUSER = "LOADUSER"
const LOADUSERSUCC = "LOADUSERSUCC"
const LOADUSERFAIL = "LOADUSERFAIL"

export function loaduser() {
    return {
        type: LOADUSER
    }
}
function reducer(state = initState, action: any) {
    switch (action.type) {
        case LOADUSERSUCC: {
            return {
                ...state,
                loading: true,
                name: 'zhou',
                hehe: action.payload
            }
        }
        // case LOADUSER: {
        //     return {
        //         ...state,
        //         loading: 'diulei',
        //         name: 'chao'
        //     }
        // }
        case LOADUSERFAIL: {
            return {
                ...state,
                loading: '🌶',
                name: '🐔'
            }
        }
        default:
            return state
    }
}
export default reducer
