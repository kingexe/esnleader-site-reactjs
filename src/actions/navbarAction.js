import axios from 'axios';
import API from "../utils/apiClient";
import {
  FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_GRADE_BEGIN,
  FETCH_USER_GRADE_SUCCESS, FETCH_USER_GRADE_FAILURE
} from './types';

const client = axios.create({
  baseURL: window.location.origin,
});

export const fetchUser = () => dispatch => {

  dispatch({ type: FETCH_USER_BEGIN })
  return client.get(`/auth/profile.json`)
    .then(res =>
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data,
      }),

    ).catch(error => {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: { error },
      })
    })
}

export const fetchUserConf = () => dispatch => {
  dispatch({ type: FETCH_USER_GRADE_BEGIN })
  return API.get(`/user/config`)
    .then(res =>
      dispatch({
        type: FETCH_USER_GRADE_SUCCESS,
        payload: res.data,
      }),

    ).catch(error => {
      dispatch({
        type: FETCH_USER_GRADE_FAILURE,
        payload: { error },
      })
    })
}

