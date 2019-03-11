const initialState = {
    register: [],
    addingUser: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADDING_USER:
        //     return { ...state, addingUser: true };
        // case ADD_USER: 
        //     return { ...state, register: action.payload, addingUser: false };
        // case ERROR:
        //     return {
        //         ...state,
        //         addingUser: false,
        //         error: action.payload
        //     }
        default:
            return state;        
    }
};

export default reducer;