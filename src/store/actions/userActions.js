import {  userService} from "../../services/UserService"


export function spendBalance(contact, amount) {
    return async (dispatch) => {
        userService.addMove(contact,amount)
        dispatch({
            type: 'SPEND_BALANCE',
            amount
        })
    }
}



export function setUser(username) {
    return async (dispatch) => {
        const user = userService.signUp(username)
        console.log(user);
        dispatch({type: 'SET_USER',user})
    }
}