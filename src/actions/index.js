import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';

export const ERROR = 'ERROR';

export const ADDING_USER = 'ADDING_USER';
export const ADD_USER = 'ADD_USER';

export const GETTING_PHOTOS = 'GETTING_PHOTOS';
export const GET_PHOTOS = 'GET_PHOTOS';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('https://expat-journal.herokuapp.com/api/auth/login', creds)
  .then(res => {localStorage.setItem('token', res.data.token, console.log(res));
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