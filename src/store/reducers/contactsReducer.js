const INITIAL_STATE = {
    contacts: null,
    filterBy: null
}

export function contactsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: [...action.contacts],
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.contact],
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: action.filterBy
            }

        default:
            return state;
    }
}