export default (state: any, action: any) => {
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
}