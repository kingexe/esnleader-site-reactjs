import apiClient from "../utils/apiClient";
import {
    FETCH_COLLABORATEUR_SUCCESS, FETCH_COLLABORATEUR_BEGIN, FETCH_COLLABORATEUR_FAILURE,
    FETCH_ADDCOLLABORATEUR_BEGIN,FETCH_ADDCOLLABORATEUR_SUCCESS,FETCH_ADDCOLLABORATEUR_FAILURE,
    FETCH_UPDATECOLLABORATEUR_BEGIN,FETCH_UPDATECOLLABORATEUR_SUCCESS,FETCH_UPDATECOLLABORATEUR_FAILURE,
    FETCH_DELETECOLLABORATEUR_BEGIN,FETCH_DELETECOLLABORATEUR_SUCCESS,FETCH_DELETECOLLABORATEUR_FAILURE,
    FETCH_COLLABORATEURID_SUCCESS,FETCH_COLLABORATEURID_BEGIN,FETCH_COLLABORATEURID_FAILURE,
} from './types';

export const fetchCollaborateur = () => dispatch => {

    dispatch({ type: FETCH_COLLABORATEUR_BEGIN })
    return apiClient.get(`/collabs/lister`)
      .then(res =>
        dispatch({
          type: FETCH_COLLABORATEUR_SUCCESS,
          payload: res.data,
        }),
  
      ).catch(error => {
        dispatch({
          type: FETCH_COLLABORATEUR_FAILURE,
          payload: { error },
        })
      });
  };

  export const fetchCollaborateurID = (collaborateurId) => dispatch => {
    console.log("action",collaborateurId)
    dispatch({ type: FETCH_COLLABORATEURID_BEGIN })
    return apiClient.get(`/collabs/list/${collaborateurId}`)
      .then(res =>
        dispatch({
          type: FETCH_COLLABORATEURID_SUCCESS,
          payload: res.data,
        }),
      ).catch(error => {
        dispatch({
          type: FETCH_COLLABORATEURID_FAILURE,
          payload: { error },
        })
      });
  };

  export const addCollaborateur = (collaborateur) => {
    console.log("action",collaborateur)
    return (dispatch) => {
    dispatch({
    type: FETCH_ADDCOLLABORATEUR_BEGIN
    });
    return apiClient.post("/collabs/ajouter", collaborateur).then(
    response => {
      console.log(response)
    dispatch({
    type: FETCH_ADDCOLLABORATEUR_SUCCESS,
    payload: response.data
    });
    })
    .catch(error => {
    dispatch({
    type: FETCH_ADDCOLLABORATEUR_FAILURE,
    payload: error.response
    })
    });
     };
    };




    export const UpdateCollaborateur = (collaborateur) => {
      console.log("action",collaborateur)
      return (dispatch) => {
      dispatch({
      type: FETCH_UPDATECOLLABORATEUR_BEGIN
      });
      return apiClient.post("/collabs/modifier", collaborateur).then(
      response => {
        console.log(response)
      dispatch({
      type: FETCH_UPDATECOLLABORATEUR_SUCCESS,
      payload: response.data
      });
      })
      .catch(error => {
      dispatch({
      type: FETCH_UPDATECOLLABORATEUR_FAILURE,
      payload: error.response
      })
      });
       };
      };


      export const DeleteCollaborateur = (nom) => {
        console.log("action",nom)
        return (dispatch) => {
        dispatch({
        type: FETCH_DELETECOLLABORATEUR_BEGIN
        });
        return apiClient.post("/collabs/supprimer/"+nom).then(
        response => {
          console.log(response)
        dispatch({
        type: FETCH_DELETECOLLABORATEUR_SUCCESS,
        payload: response.data
        });
        })
        .catch(error => {
        dispatch({
        type: FETCH_DELETECOLLABORATEUR_FAILURE,
        payload: error.response
        })
        });
         };
        };