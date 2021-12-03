import apiClient from "../utils/apiClient";
import {
    FETCH_PROJET_SUCCESS, FETCH_PROJET_BEGIN, FETCH_PROJET_FAILURE,FETCH_ADDPROJET_BEGIN,
    FETCH_ADDPROJET_SUCCESS,FETCH_ADDPROJET_FAILURE,
    FETCH_UPDATEPROJET_BEGIN,
    FETCH_UPDATEPROJET_SUCCESS,FETCH_UPDATEPROJET_FAILURE,
    FETCH_DELETEPROJET_BEGIN,
    FETCH_DELETEPROJET_SUCCESS,FETCH_DELETEPROJET_FAILURE,
    FETCH_PROJETID_SUCCESS,
    FETCH_PROJETID_BEGIN,
    FETCH_PROJETID_FAILURE,
    FETCH_ADDPROJETCOLAB_SUCCESS,
    FETCH_ADDPROJETCOLAB_BEGIN,
    FETCH_ADDPROJETCOLAB_FAILURE,
    FETCH_ADDPROJETTECH_SUCCESS,
    FETCH_ADDPROJETTECH_BEGIN,
    FETCH_ADDPROJETTECH_FAILURE,
} from '../actions/types';


export const fetchProjet = () => dispatch => {

    dispatch({ type: FETCH_PROJET_BEGIN })
    return apiClient.get(`/projet/lister`)
      .then(res =>
        dispatch({
          type: FETCH_PROJET_SUCCESS,
          payload: res.data,
        }),
  
      ).catch(error => {
        dispatch({
          type: FETCH_PROJET_FAILURE,
          payload: { error },
        })
      });
  };

  export const fetchProjetID = (projetId) => dispatch => {
    console.log("action",projetId)
    dispatch({ type: FETCH_PROJETID_BEGIN })
    return apiClient.get(`/projet/list/${projetId}`)
      .then(res =>
        dispatch({
          type: FETCH_PROJETID_SUCCESS,
          payload: res.data,
        }),
      ).catch(error => {
        dispatch({
          type: FETCH_PROJETID_FAILURE,
          payload: { error },
        })
      });
  };

  export const addProjet = (projet) => {
    console.log("action",projet)
    return (dispatch) => {
    dispatch({
    type: FETCH_ADDPROJET_BEGIN
    });
    return apiClient.post("/projet/ajouter", projet).then(
    response => {
      console.log(response)
    dispatch({
    type: FETCH_ADDPROJET_SUCCESS,
    payload: response.data
    });
    })
    .catch(error => {
    dispatch({
    type: FETCH_ADDPROJET_FAILURE,
    payload: error.response
    })
    });
     };
    };

    export const UpdateProjet = (projet) => {
        console.log("action",projet)
        return (dispatch) => {
        dispatch({
        type: FETCH_UPDATEPROJET_BEGIN
        });
        return apiClient.post("/projet/modifier", projet).then(
        response => {
          console.log(response)
        dispatch({
        type: FETCH_UPDATEPROJET_SUCCESS,
        payload: response.data
        });
        })
        .catch(error => {
        dispatch({
        type: FETCH_UPDATEPROJET_FAILURE,
        payload: error.response
        })
        });
         };
        };

        export const DeleteProjet = (nom) => {
            console.log("action",nom)
            return (dispatch) => {
            dispatch({
            type: FETCH_DELETEPROJET_BEGIN
            });
            return apiClient.post("/projet/supprimer/"+nom).then(
            response => {
              console.log(response)
            dispatch({
            type: FETCH_DELETEPROJET_SUCCESS,
            payload: response.data
            });
            })
            .catch(error => {
            dispatch({
            type: FETCH_DELETEPROJET_FAILURE,
            payload: error.response
            })
            });
             };
            };


            export const addCollab = (id,collab) => {
              console.log("action",collab)
              return (dispatch) => {
              dispatch({
              type: FETCH_ADDPROJETCOLAB_BEGIN
              });
              return apiClient.post("/projet/ajouterCollab/"+id,collab).then(
              response => {
                console.log(response)
              dispatch({
              type: FETCH_ADDPROJETCOLAB_SUCCESS,
              payload: response.data
              });
              })
              .catch(error => {
              dispatch({
              type: FETCH_ADDPROJETCOLAB_FAILURE,
              payload: error.response
              })
              });
               };
              };


              export const addTechno= (id,techno) => {
                console.log("action",techno)
                return (dispatch) => {
                dispatch({
                type: FETCH_ADDPROJETTECH_BEGIN
                });
                return apiClient.post("/projet/ajouterTechno/"+id, techno).then(
                response => {
                  console.log(response)
                dispatch({
                type: FETCH_ADDPROJETTECH_SUCCESS,
                payload: response.data
                });
                })
                .catch(error => {
                dispatch({
                type: FETCH_ADDPROJETTECH_FAILURE,
                payload: error.response
                })
                });
                 };
                };

            
    