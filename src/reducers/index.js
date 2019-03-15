import { ERROR, ADDING_USER, ADD_USER, GETTING_PHOTOS, GET_PHOTOS, ADDING_PHOTO, ADD_PHOTO, UPDATING_PHOTO,
     UPDATE_PHOTO, DELETING_PHOTO, DELETE_PHOTO, SINGLE_PHOTO, TOGGLE_UPDATE_PHOTO, SUBMIT_EDIT } from '../actions/index';
//create multiple arrays for the purpose of orginizing api calls
const initialState = {
    register: [],
    all: [],
    id: [],
    photoSelected: {},
    photoId: [],
    addingUser: false,
    gettingPhotos: false,
    addingPhoto: false,
    showUpdate: false,
    updatingPhoto: false,
    photoUpdated: false,
    error: null
};
//actions functions when method is called and linked with action through export/import
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
        case UPDATING_PHOTO:
            return { ...state, updatingPhoto: true };
        case UPDATE_PHOTO:
            return { ...state, id: action.payload, updatingPhoto: false };
        case DELETING_PHOTO:
            return { ...state, deletingPhoto: true };
        case DELETE_PHOTO:
            return { ...state, photoId: action.payload, deletingPhoto: false };    
        case SINGLE_PHOTO:
            return { ...state, photoSelected: action.payload, showUpdate: false };
        case TOGGLE_UPDATE_PHOTO:
            return { ...state, showUpdate: !state.showUpdate };
        case SUBMIT_EDIT:
            return Object.assign({}, state, { all: action.payload });           
        case ERROR:
            return {
                ...state,
                addingUser: false,
                gettingPhotos: false,
                addingPhoto: false,
                updatingPhoto: false,
                deletingPhoto: false,
                error: action.payload
            }                    
        default:
            return state;        
    }
};

export default reducer;