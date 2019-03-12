import { ERROR, ADDING_USER, ADD_USER, GETTING_PHOTOS, GET_PHOTOS, ADDING_PHOTO, ADD_PHOTO } from '../actions';

const initialState = {
    register: [],
    all: [],
    id: [],
    addingUser: false,
    gettingPhotos: false,
    addingPhoto: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDING_USER:
            return { ...state, addingUser: true };
        case ADD_USER: 
            return { ...state, register: action.payload, addingUser: false };
        case GETTING_PHOTOS:
            return{...state, gettingPhotos: true };
        case GET_PHOTOS:
            return{...state, all: action.payload, gettingPhotos: false };
        case ADDING_PHOTO:
            return {...state, addingPhoto: true };
        case ADD_PHOTO:
            return {...state, id: action.payload, addingPhoto: false};    
        case ERROR:
            return {
                ...state,
                addingUser: false,
                gettingPhotos: false,
                addingPhoto: false,
                error: action.payload
            }                    
        default:
            return state;        
    }
};

export default reducer;