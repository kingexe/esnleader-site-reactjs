import apiClient from "../utils/apiClient";
import {
    FETCH_TECHNOLOGIE_SUCCESS, FETCH_TECHNOLOGIE_BEGIN, FETCH_TECHNOLOGIE_FAILURE,FETCH_ADDTECHNOLOGIE_BEGIN,
    FETCH_ADDTECHNOLOGIE_SUCCESS,FETCH_ADDTECHNOLOGIE_FAILURE,
    FETCH_UPDATETECHNOLOGIE_BEGIN,
    FETCH_UPDATETECHNOLOGIE_SUCCESS,FETCH_UPDATETECHNOLOGIE_FAILURE,
    FETCH_DELETETECHNOLOGIE_BEGIN,
    FETCH_DELETETECHNOLOGIE_SUCCESS,FETCH_DELETETECHNOLOGIE_FAILURE,
    FETCH_TECHNOLOGIEID_SUCCESS,
    FETCH_TECHNOLOGIEID_BEGIN,
    FETCH_TECHNOLOGIEID_FAILURE,
} from './types';

export const fetchTechnologie = () => dispatch => {

    dispatch({ type: FETCH_TECHNOLOGIE_BEGIN })
    return apiClient.get(`/techs/lister`)
      .then(res =>
        dispatch({
          type: FETCH_TECHNOLOGIE_SUCCESS,
          payload: res.data,
        }),
  
      ).catch(error => {
        dispatch({
          type: FETCH_TECHNOLOGIE_FAILURE,
          payload: { error },
        })
      });
  };

  export const fetchTechnologieID = (technologieId) => dispatch => {
    console.log("action",technologieId)
    dispatch({ type: FETCH_TECHNOLOGIEID_BEGIN })
    return apiClient.get(`/techs/list/${technologieId}`)
      .then(res =>
        dispatch({
          type: FETCH_TECHNOLOGIEID_SUCCESS,
          payload: res.data,
        }),
      ).catch(error => {
        dispatch({
          type: FETCH_TECHNOLOGIEID_FAILURE,
          payload: { error },
        })
      });
  };

  export const addTechnologie = (technologie) => {
    console.log("action",technologie)
    return (dispatch) => {
    dispatch({
    type: FETCH_ADDTECHNOLOGIE_BEGIN
    });
    return apiClient.post("/techs/ajouter", technologie).then(
    response => {
      console.log(response)
    dispatch({
    type: FETCH_ADDTECHNOLOGIE_SUCCESS,
    payload: response.data
    });
    })
    .catch(error => {
    dispatch({
    type: FETCH_ADDTECHNOLOGIE_FAILURE,
    payload: error.response
    })
    });
     };
    };




    export const UpdateTechnologie = (technologie) => {
      console.log("action",technologie)
      return (dispatch) => {
      dispatch({
      type: FETCH_UPDATETECHNOLOGIE_BEGIN
      });
      return apiClient.post("/techs/modifier", technologie).then(
      response => {
        console.log(response)
      dispatch({
      type: FETCH_UPDATETECHNOLOGIE_SUCCESS,
      payload: response.data
      });
      })
      .catch(error => {
      dispatch({
      type: FETCH_UPDATETECHNOLOGIE_FAILURE,
      payload: error.response
      })
      });
       };
      };


      export const DeleteTechnologie = (nom) => {
        console.log("action",nom)
        return (dispatch) => {
        dispatch({
        type: FETCH_DELETETECHNOLOGIE_BEGIN
        });
        return apiClient.post("/techs/supprimer/"+nom).then(
        response => {
          console.log(response)
        dispatch({
        type: FETCH_DELETETECHNOLOGIE_SUCCESS,
        payload: response.data
        });
        })
        .catch(error => {
        dispatch({
        type: FETCH_DELETETECHNOLOGIE_FAILURE,
        payload: error.response
        })
        });
         };
        };