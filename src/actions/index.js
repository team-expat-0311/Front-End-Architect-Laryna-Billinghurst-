import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';

export const ERROR = 'ERROR';
export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const GET_FRIENDS = 'GET_FRIENDS';

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADD_FRIEND ='ADD_FRIEND';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login', creds)
    .then(res => {localStorage.setItem('token', res.data.payload);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
    })
}

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends', {
    headers: { Authorization: localStorage.getItem('token') }
  })
    return dispatch => {
      dispatch({ type: GETTING_FRIENDS });
        friends
      .then(response => {
        dispatch({ type: GET_FRIENDS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
    };
};

export const addFriend = friend => {
  const newFriend = axios.post('http://localhost:5000/api/friends', friend,
  {headers: { Authorization: localStorage.getItem('token') }}
  )
  return dispatch => {
    dispatch({ type: ADDING_FRIEND });
      newFriend
    .then(({ data }) => {
      dispatch({ type: ADD_FRIEND, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  };
};