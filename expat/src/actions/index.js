import axios from 'axios';
// seperated exports represents export code block
export const LOGIN_START = 'LOGIN_START';

export const ERROR = 'ERROR';

export const ADDING_USER = 'ADDING_USER';
export const ADD_USER = 'ADD_USER';

export const GETTING_PHOTOS = 'GETTING_PHOTOS';
export const GET_PHOTOS = 'GET_PHOTOS';

export const ADDING_PHOTO = 'ADDING_PHOTO';
export const ADD_PHOTO = 'ADD_PHOTO';

export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const UPDATING_PHOTO = 'UPDATING_PHOTO';
export const DELETING_PHOTO = 'DELETING_PHOTO';

export const SINGLE_PHOTO = 'SINGLE_PHOTO';
export const TOGGLE_UPDATE_PHOTO = 'TOGGLE_UPDATE_PHOTO';
export const SUBMIT_EDIT = "SUBMIT_EDIT";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('https://expat-journal.herokuapp.com/api/auth/login', creds)
  .then(res => {
    localStorage.setItem('token', res.data.token, console.log(res));
    localStorage.setItem('user_id', res.data.user_id, console.log(res));
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
  })
}

export const addUser = user => {
  const newUser = axios.post('https://expat-journal.herokuapp.com/api/auth/register', user
  ).then( res => console.log(res))
  return dispatch => {
    dispatch({ type: ADDING_USER });
      newUser
    .then(({ data }) => {
      dispatch({ type: ADD_USER, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  };
};

export const getPhotos = () => {
  const all = axios.get('https://expat-journal.herokuapp.com/api/photos/all', {
    headers: { Authorization: localStorage.getItem('token') }
  })
    return dispatch => {
      dispatch({ type: GETTING_PHOTOS });
        all
      .then(response => {
        dispatch({ type: GET_PHOTOS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
    };
};

export const addPhoto = (id, photo) => {
  const newPhoto = axios.post(`https://expat-journal.herokuapp.com/api/photos/all/${id}`, photo, 
  {headers: { Authorization: localStorage.getItem('token') }}
  )
  return dispatch => {
    dispatch({ type: ADDING_PHOTO });
      newPhoto
    .then(({ data }) => {
      console.log(data)
      dispatch({ type: ADD_PHOTO, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  };
};

export const deletePhoto = (photoId)  => {
  const deletedPhoto = axios.delete(`https://expat-journal.herokuapp.com/api/photos/all/${photoId}`,
  {headers: { Authorization: localStorage.getItem('token') }
});
  return dispatch => {
    
    dispatch({ type: DELETING_PHOTO });
    deletedPhoto
      .then(({ data }) => {
        dispatch({ type: DELETE_PHOTO, payload: data });
        dispatch({ type: SINGLE_PHOTO, payload: {} });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_PHOTO
  };
};

export const updateSinglePhoto = photo => {
  return {
    type: SINGLE_PHOTO,
    payload: photo
  };
};

export const submitEdit = (edits, photoId) => {
  return function(dispatch) {
    axios
      .put(`https://expat-journal.herokuapp.com/api/photos/all/${photoId}`, edits)
      .then(({ data }) => {
        dispatch({ type: SINGLE_PHOTO, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};  
