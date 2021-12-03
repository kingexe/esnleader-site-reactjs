import apiClient from "../utils/apiClient";
import {
    FETCH_ENTREPRISE_SUCCESS, FETCH_ENTREPRISE_BEGIN, FETCH_ENTREPRISE_FAILURE,FETCH_ADDENTREPRISE_BEGIN,
    FETCH_ADDENTREPRISE_SUCCESS,FETCH_ADDENTREPRISE_FAILURE,
    FETCH_ENTREPRISEID_SUCCESS,
    FETCH_ENTREPRISEID_BEGIN,
    FETCH_ENTREPRISEID_FAILURE,
    FETCH_UPDATEENTREPRISE_BEGIN,
    FETCH_UPDATEENTREPRISE_SUCCESS,FETCH_UPDATEENTREPRISE_FAILURE,
    FETCH_DELETEENTREPRISE_BEGIN,
    FETCH_DELETEENTREPRISE_SUCCESS,FETCH_DELETEENTREPRISE_FAILURE,
    FETCH_ADDFILIALEE_BEGIN,FETCH_ADDFILIALEE_SUCCESS,
    FETCH_ADDFILIALEE_FAILURE
} from './types';

export const fetchEntreprise = () => dispatch => {

    dispatch({ type: FETCH_ENTREPRISE_BEGIN })
    return apiClient.get(`/entreprise/lister`)
      .then(res =>
        dispatch({
          type: FETCH_ENTREPRISE_SUCCESS,
          payload: res.data,
        }),
  
      ).catch(error => {
        dispatch({
          type: FETCH_ENTREPRISE_FAILURE,
          payload: { error },
        })
      });
  };

  export const fetchEntrepriseID = (entrepriseId) => dispatch => {
    console.log("action",entrepriseId)
    dispatch({ type: FETCH_ENTREPRISEID_BEGIN })
    return apiClient.get(`/entreprise/list/${entrepriseId}`)
      .then(res =>
        dispatch({
          type: FETCH_ENTREPRISEID_SUCCESS,
          payload: res.data,
        }),
      ).catch(error => {
        dispatch({
          type: FETCH_ENTREPRISEID_FAILURE,
          payload: { error },
        })
      });
  };
export const addEntreprise = (entreprise) => {
    console.log("action",entreprise)
    return (dispatch) => {
    dispatch({
    type: FETCH_ADDENTREPRISE_BEGIN
    });
    return apiClient.post("/entreprise/ajouter", entreprise).then(
    response => {
      console.log(response)
    dispatch({
    type: FETCH_ADDENTREPRISE_SUCCESS,
    payload: response.data
    });
    })
    .catch(error => {
    dispatch({
    type: FETCH_ADDENTREPRISE_FAILURE,
    payload: error.response
    })
    });
     };
    };




    export const UpdateEntreprise = (entreprise) => {
      console.log("action",entreprise)
      return (dispatch) => {
      dispatch({
      type: FETCH_UPDATEENTREPRISE_BEGIN
      });
      return apiClient.post("/entreprise/modifier", entreprise).then(
      response => {
        console.log(response)
      dispatch({
      type: FETCH_UPDATEENTREPRISE_SUCCESS,
      payload: response.data
      });
      })
      .catch(error => {
      dispatch({
      type: FETCH_UPDATEENTREPRISE_FAILURE,
      payload: error.response
      })
      });
       };
      };


      export const DeleteEntreprise = (nom) => {
        console.log("action",nom)
        return (dispatch) => {
        dispatch({
        type: FETCH_DELETEENTREPRISE_BEGIN
        });
        return apiClient.post("/entreprise/supprimer/"+nom).then(
        response => {
          console.log(response)
        dispatch({
        type: FETCH_DELETEENTREPRISE_SUCCESS,
        payload: response.data
        });
        })
        .catch(error => {
        dispatch({
        type: FETCH_DELETEENTREPRISE_FAILURE,
        payload: error.response
        })
        });
         };
        };


        export const addFiliale = (id,filiale) => {
          console.log("action",filiale)
          return (dispatch) => {
          dispatch({
          type: FETCH_ADDFILIALEE_BEGIN
          });
          return apiClient.post("/entreprise/ajouterFiliale/"+id, filiale).then(
          response => {
            console.log(response)
          dispatch({
          type: FETCH_ADDFILIALEE_SUCCESS,
          payload: response.data
          });
          })
          .catch(error => {
          dispatch({
          type: FETCH_ADDFILIALEE_FAILURE,
          payload: error.response
          })
          });
           };
          };