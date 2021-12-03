import {
    FETCH_COLLABORATEUR_SUCCESS, FETCH_COLLABORATEUR_BEGIN, FETCH_COLLABORATEUR_FAILURE,FETCH_ADDCOLLABORATEUR_BEGIN,
    FETCH_ADDCOLLABORATEUR_SUCCESS,FETCH_ADDCOLLABORATEUR_FAILURE,
    FETCH_UPDATECOLLABORATEUR_BEGIN,
    FETCH_UPDATECOLLABORATEUR_SUCCESS,FETCH_UPDATECOLLABORATEUR_FAILURE,
    FETCH_DELETECOLLABORATEUR_BEGIN,
    FETCH_DELETECOLLABORATEUR_SUCCESS,FETCH_DELETECOLLABORATEUR_FAILURE,
    FETCH_COLLABORATEURID_SUCCESS,
    FETCH_COLLABORATEURID_BEGIN,
    FETCH_COLLABORATEURID_FAILURE,
} from '../actions/types';

export const initialState = {
    collaborateurs: [],
    fetchCollaborateurLoading:false,
    fetchCollaborateurError: null,
    fetchCollaborateurIDLoading:false,
    fetchCollaborateurIDError: null,
    collaborateurFetching:false,
    fetchAddingCollaborateurError : null,
    fetchUpdateCollaborateurError:null,
    fetchDeleteCollaborateurError:null,
}

const collaborateurReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLLABORATEUR_BEGIN:
            return {
                ...state,
                fetchCollaborateurLoading: true,
                fetchCollaborateurError: null,

            }
        case FETCH_COLLABORATEUR_SUCCESS:
            return {
                ...state,
                fetchCollaborateurLoading: false,
                collaborateurs: action.payload,

            }
        case FETCH_COLLABORATEUR_FAILURE:
            return {
                ...state,
                fetchCollaborateurLoading: false,
                fetchCollaborateurError: action.payload.error,
            }


            case FETCH_COLLABORATEURID_BEGIN:
            return {
                ...state,
                fetchCollaborateurLoading: true,
                fetchCollaborateurIDError: null,

            }
        case FETCH_COLLABORATEURID_SUCCESS:
            return {
                ...state,
                fetchCollaborateurIDLoading: false,
                collaborateurs: action.payload,

            }
        case FETCH_COLLABORATEURID_FAILURE:
            return {
                ...state,
                fetchCollaborateurIDLoading: false,
                fetchCollaborateurIDError: action.payload.error,
            }

        case FETCH_ADDCOLLABORATEUR_BEGIN :
            return{
                ...state,
                collaborateurFetching:true,
                }
        case FETCH_ADDCOLLABORATEUR_SUCCESS :
            return{
                ...state,
                collaborateurFetching:false,
                collaborateurs :[
                    ...state.collaborateurs,
                    action.payload
                ]
            }        
        case  FETCH_ADDCOLLABORATEUR_FAILURE:
            return {
                ...state,
                collaborateurFetching: false,
                fetchAddingCollaborateurError:action.payload.error,
            }
        
            
        case FETCH_UPDATECOLLABORATEUR_BEGIN :
            return{
                 ...state,
                    collaborateurFetching:true,
                    }
        case FETCH_UPDATECOLLABORATEUR_SUCCESS :
            return{
                ...state,
                collaborateurFetching:false,
                collaborateurs :[
                    ...state.collaborateurs,
                    action.payload
                ]
            }        
        case  FETCH_UPDATECOLLABORATEUR_FAILURE:
            return {
                ...state,
                collaborateurFetching: false,
                fetchUpdateCollaborateurError:action.payload.error,
            }

        case FETCH_DELETECOLLABORATEUR_BEGIN :
                return{
                    ...state,
                    collaborateurFetching:true,
                }


        case FETCH_DELETECOLLABORATEUR_SUCCESS:
                return{
                    ...state,
                    collaborateurFetching:false,
                    collaborateurs :[
                        ...state.collaborateurs,
                        action.payload
                    ]
                    }        
       case  FETCH_DELETECOLLABORATEUR_FAILURE:
                return {
                    ...state,
                    collaborateurFetching: false,
                    fetchDeleteCollaborateurError:action.payload.error,
                    }   
                    


       
        default:
            return state;
    }
}
export default collaborateurReducer;