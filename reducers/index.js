import { ERROR, GETTING_FRIENDS, GET_FRIENDS, ADDING_FRIEND, ADD_FRIEND } from '../actions';

const initialState = {
    friends: [],
    gettingFriends: false,
    addingFriend: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_FRIENDS:
            return{ ...state, gettingFriends: true };
        case GET_FRIENDS:
            return{ ...state, friends: action.payload, gettingFriends: false };
        case ADDING_FRIEND:
            return { ...state, addingFriend: true };
        case ADD_FRIEND:
            return { ...state, friends: action.payload, addingFriend: false };
        case ERROR:
            return {
                ...state,
                gettingFriends: false,
                addingFriend: false,
                error: action.payload
            }    
        default: 
            return state;
    }
};

export default reducer;