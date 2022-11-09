

const INITIAL_STATE = {
    loggedInUser: {
        name: null,
        coins: 100,
        isAdmin: true
    }
}

export function userReducer(state = INITIAL_STATE, action) {
    const { loggedInUser } = state
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                loggedInUser: action.user
            }
        case 'SPEND_BALANCE':
            return {
                ...state,
                loggedInUser: { ...loggedInUser, coins: loggedInUser.coins - action.amount }
            }
    
        default:
            return state
            
    }
}