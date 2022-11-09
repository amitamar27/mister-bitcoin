import { storageService } from "./storageService"

export const userService = {
    getUser,
    signUp,
    addMove,
    
}

const USER_KEY = 'user'
let loggedInUser 

function getUser() {
    let user = storageService.load(USER_KEY)
    return user
}

function signUp(name){
    let user = { name, coins: 100, moves: [] }
    loggedInUser = user
    storageService.store(USER_KEY, loggedInUser)
    return loggedInUser
    
}

function addMove(contact, amount) {
    console.log(contact, amount);
    let user = getUser()
    if (user.coins - amount < 0) {
        alert('You cant do that')
        return
    }
    var datetime = new Date().toLocaleString();
    user.coins -= amount
    user.moves.unshift({
        to: contact,
        amount,
        datetime

    })
    storageService.store(USER_KEY, user)
}



// function loadUser() {
//     let user = storageService.load(USER_KEY)
//     // if (!user || !user.length) contacts = gDefaultContacts
//     storageService.store(USER_KEY, user)
//     return user
// }
