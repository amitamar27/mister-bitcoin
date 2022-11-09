import { contactService } from "../../services/contactService"

export function loadContacts() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().contactModule
        
        try {
            const contacts = await contactService.getContacts(filterBy)
            dispatch({type:'SET_CONTACTS',contacts})
        } catch (err) {
            console.log(err);
        }
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({type:'SET_FILTER_BY' , filterBy})
    }
}