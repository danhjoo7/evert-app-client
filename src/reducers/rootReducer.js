const initialState = {
    currentUser: {},
    users: [],
    items: [],
    search:'',
    // searchItems: [],
    favorites: [],
    // selectedItem:
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN-SIGN_IN':
            return state
        case 'SET_CURRENT_USER':
            return { ...state, currentUser: action.user }
        // case 'SET_ALL_USERS':
        //     return { ...state, users: action.users }
        case 'CLEAR_CURRENT_USER':
            return { ...state, currentUser: {} }
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.user] }
        case 'SEARCH':
            return { ...state, search: action.search }
        case 'GET_ALL_ITEMS':
            return { ...state, items: action.items }
        default:
            return state
    }
}

export default rootReducer