import axios from 'axios';



export const ERROR = 'ERROR';
export const ADDING_USER = 'ADDING_USER';
export const ADD_USER ='ADD_USER';

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