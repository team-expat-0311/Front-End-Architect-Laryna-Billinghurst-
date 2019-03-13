import {SINGLE_PHOTO, TOGGLE_UPDATE_PHOTO} from '../actions';

const initialState = {
  photoSelected: {},
  showUpdate: false
};

export const singlePhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_PHOTO:
      return { ...state, friendSelected: action.payload, showUpdate: false };
    case TOGGLE_UPDATE_PHOTO:
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
};