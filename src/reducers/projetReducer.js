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


export const initialState = {
    projets: [],
    fetchProjetLoading:false,
    fetchProjetError: null,
    fetchProjetIDLoading:false,
    fetchProjetIDError: null,
    projetFetching:false,
    fetchAddingProjetError : null,
    fetchUpdateProjetError:null,
    fetchDeleteProjetError:null,
    fetchAddProjetColabError:null,
    fetchAddProjetTechError:null,
}
const projetReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJET_BEGIN:
            return {
                ...state,
                fetchProjetLoading: true,
                fetchProjetError: null,

            }
        case FETCH_PROJET_SUCCESS:
            return {
                ...state,
                fetchProjetLoading: false,
                projets: action.payload,

            }
        case FETCH_PROJET_FAILURE:
            return {
                ...state,
                fetchProjetLoading: false,
                fetchProjetError: action.payload.error,
            }


            case FETCH_PROJETID_BEGIN:
            return {
                ...state,
                fetchProjetIDLoading: true,
                fetchProjetIDError: null,

            }
        case FETCH_PROJETID_SUCCESS:
            return {
                ...state,
                fetchProjetIDLoading: false,
                projets: action.payload,

            }
        case FETCH_PROJETID_FAILURE:
            return {
                ...state,
                fetchProjetIDLoading: false,
                fetchProjetIDError: action.payload.error,
            }

        case FETCH_ADDPROJET_BEGIN :
            return{
                ...state,
                projetFetching:true,
                }
        case FETCH_ADDPROJET_SUCCESS :
            return{
                ...state,
                projetFetching:false,
                projets :[
                    ...state.projets,
                    action.payload
                ]
            }        
        case  FETCH_ADDPROJET_FAILURE:
            return {
                ...state,
                projetFetching: false,
                fetchAddingProjetError:action.payload.error,
            }
        
            
        case FETCH_UPDATEPROJET_BEGIN :
            return{
                 ...state,
                 projetFetching:true,
                    }
        case FETCH_UPDATEPROJET_SUCCESS :
            return{
                ...state,
                projetFetching:false,
                projets :[
                    ...state.projets,
                    action.payload
                ]
            }        
        case  FETCH_UPDATEPROJET_FAILURE:
            return {
                ...state,
                projetFetching: false,
                fetchUpdateProjetError:action.payload.error,
            }

        case FETCH_DELETEPROJET_BEGIN :
                return{
                    ...state,
                    projetFetching:true,
                }


        case FETCH_DELETEPROJET_SUCCESS:
                return{
                    ...state,
                    projetFetching:false,
                    projets :[
                        ...state.projets,
                        action.payload
                    ]
                    }        
       case  FETCH_DELETEPROJET_FAILURE:
                return {
                    ...state,
                    projetFetching: false,
                    fetchDeleteProjetError:action.payload.error,
                    }  
                    
        case  FETCH_ADDPROJETCOLAB_BEGIN :
                 return{
                    ...state,
                    projetFetching:true,
                }
        case FETCH_ADDPROJETCOLAB_SUCCESS:
                return{
                     ...state,
                     projetFetching:false,
                    projets :[
                    ...state.projets,
                      action.payload
                          ]
                   }        
        case  FETCH_ADDPROJETCOLAB_FAILURE:
                 return {
                     ...state,
                    projetFetching: false,
                    fetchAddProjetColabError:action.payload.error,
                     }

           case  FETCH_ADDPROJETTECH_BEGIN :
                 return{
                    ...state,
                    projetFetching:true,
                }
        
        
        case FETCH_ADDPROJETTECH_SUCCESS:
                return{
                     ...state,
                     projetFetching:false,
                    projets :[
                    ...state.projets,
                      action.payload
                          ]
                   }        
        case  FETCH_ADDPROJETTECH_FAILURE:
                 return {
                     ...state,
                    projetFetching: false,
                    fetchAddProjetTechError:action.payload.error,
                     }      
                    


                 
       
        default:
            return state;
    }
}
export default projetReducer;