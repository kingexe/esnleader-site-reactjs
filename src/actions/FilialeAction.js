import apiClient from "../utils/apiClient";
import {
    FETCH_FILIALE_SUCCESS, FETCH_FILIALE_BEGIN, FETCH_FILIALE_FAILURE,FETCH_ADDFILIALE_BEGIN,
    FETCH_ADDFILIALE_SUCCESS,FETCH_ADDFILIALE_FAILURE,
    FETCH_UPDATEFILIALE_BEGIN,
    FETCH_UPDATEFILIALE_SUCCESS,FETCH_UPDATEFILIALE_FAILURE,
    FETCH_DELETEFILIALE_BEGIN,
    FETCH_DELETEFILIALE_SUCCESS,FETCH_DELETEFILIALE_FAILURE,
    FETCH_FILIALEEID_SUCCESS,
    FETCH_FILIALEEID_BEGIN,
    FETCH_FILIALEEID_FAILURE
} from './types';


export const fetchFiliale = () => dispatch => {

    dispatch({ type: FETCH_FILIALE_BEGIN })
    return apiClient.get(`/filiale/lister`)
      .then(res =>
        dispatch({
          type: FETCH_FILIALE_SUCCESS,
          payload: res.data,
        }),
  
      ).catch(error => {
        dispatch({
          type: FETCH_FILIALE_FAILURE,
          payload: { error },
        })
      });
  };

  export const addFiliale = (filiale) => {
    console.log("action",filiale)
    return (dispatch) => {
    dispatch({
    type: FETCH_ADDFILIALE_BEGIN
    });
    return apiClient.post("/filiale/ajouter", filiale).then(
    response => {
      console.log(response)
    dispatch({
    type: FETCH_ADDFILIALE_SUCCESS,
    payload: response.data
    });
    })
    .catch(error => {
    dispatch({
    type: FETCH_ADDFILIALE_FAILURE,
    payload: error.response
    })
    });
     };
    };

    export const DeleteFiliale= (nom) => {
      console.log("action",nom)
      return (dispatch) => {
      dispatch({
      type: FETCH_DELETEFILIALE_BEGIN
      });
      return apiClient.post("/filiale/supprimer/"+nom).then(
      response => {
        console.log(response)
      dispatch({
      type: FETCH_DELETEFILIALE_SUCCESS,
      payload: response.data
      });
      })
      .catch(error => {
      dispatch({
      type: FETCH_DELETEFILIALE_FAILURE,
      payload: error.response
      })
      });
       };
      };

      export const UpdateFiliale = (filiale) => {
        console.log("action",filiale)
        return (dispatch) => {
        dispatch({
        type: FETCH_UPDATEFILIALE_BEGIN
        });
        return apiClient.post("/filiale/modifier", filiale).then(
        response => {
          console.log(response)
        dispatch({
        type: FETCH_UPDATEFILIALE_SUCCESS,
        payload: response.data
        });
        })
        .catch(error => {
        dispatch({
        type: FETCH_UPDATEFILIALE_FAILURE,
        payload: error.response
        })
        });
         };
        };


        export const addProjet = (id,projet) => {
          console.log("action",projet)
          return (dispatch) => {
          dispatch({
          type: FETCH_ADDFILIALE_BEGIN
          });
          return apiClient.post("/filiale/ajouterProjet/"+id, projet).then(
          response => {
            console.log(response)
          dispatch({
          type: FETCH_ADDFILIALE_SUCCESS,
          payload: response.data
          });
          })
          .catch(error => {
          dispatch({
          type: FETCH_ADDFILIALE_FAILURE,
          payload: error.response
          })
          });
           };
          };
        