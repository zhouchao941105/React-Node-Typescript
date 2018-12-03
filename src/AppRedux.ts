const initState = {
    loading: true,
    name: 'zc',
    data: {},
    follow: []
}
const LOADUSER = "LOADUSER"
const LOADUSERSUCC = "LOADUSERSUCC"
const LOADUSERFAIL = "LOADUSERFAIL"
const LOADFOLLOWER = "LOADFOLLOWER"
const LOADFOLLOWERSUCC = "LOADFOLLOWERSUCC"
export function loaduser() {
    return {
        type: LOADUSER
    }
}
// export function loadFollower() {
//     return {
//         type: LOADFOLLOWER,
//         url:''
//     }
// }
function reducer(state = initState, action: any) {
    switch (action.type) {
        case LOADUSERSUCC: {
            return {
                ...state,
                loading: true,
                data: action.data
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
                loading: action.message,
                name: '🐔'
            }
        }
        case LOADFOLLOWERSUCC: {
            return {
                ...state,
                follow: action.data
            }
        }
        default:
            return state
    }
}
export default reducer
