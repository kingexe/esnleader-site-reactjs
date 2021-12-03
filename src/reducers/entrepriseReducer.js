import {
    FETCH_ENTREPRISE_SUCCESS, FETCH_ENTREPRISE_BEGIN, FETCH_ENTREPRISE_FAILURE,FETCH_ADDENTREPRISE_BEGIN,
    FETCH_ADDENTREPRISE_SUCCESS,FETCH_ADDENTREPRISE_FAILURE,
    FETCH_UPDATEENTREPRISE_BEGIN,
    FETCH_UPDATEENTREPRISE_SUCCESS,FETCH_UPDATEENTREPRISE_FAILURE,
    FETCH_DELETEENTREPRISE_BEGIN,
    FETCH_DELETEENTREPRISE_SUCCESS,FETCH_DELETEENTREPRISE_FAILURE,
    FETCH_ENTREPRISEID_SUCCESS,
    FETCH_ENTREPRISEID_BEGIN,
    FETCH_ENTREPRISEID_FAILURE,
    FETCH_ADDFILIALEE_BEGIN,FETCH_ADDFILIALEE_SUCCESS,
    FETCH_ADDFILIALEE_FAILURE
} from '../actions/types';

export const initialState = {
    entreprises: [],
    fetchEntrepriseLoading:false,
    fetchEntrepriseError: null,
    fetchEntrepriseIDLoading:false,
    fetchEntrepriseIDError: null,
    entrepriseFetching:false,
    fetchAddingEntrepriseError : null,
    fetchUpdateEntrepriseError:null,
    fetchDeleteEntrepriseError:null,
    fetchAddFilialeEntreError:null,
}


const entrepriseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENTREPRISE_BEGIN:
            return {
                ...state,
                fetchEntrepriseLoading: true,
                fetchEntrepriseError: null,

            }
        case FETCH_ENTREPRISE_SUCCESS:
            return {
                ...state,
                fetchEntrepriseLoading: false,
                entreprises: action.payload,

            }
        case FETCH_ENTREPRISE_FAILURE:
            return {
                ...state,
                fetchEntrepriseLoading: false,
                fetchEntrepriseError: action.payload.error,
            }


            case FETCH_ENTREPRISEID_BEGIN:
            return {
                ...state,
                fetchEntrepriseLoading: true,
                fetchEntrepriseIDError: null,

            }
        case FETCH_ENTREPRISEID_SUCCESS:
            return {
                ...state,
                fetchEntrepriseIDLoading: false,
                entreprises: action.payload,

            }
        case FETCH_ENTREPRISEID_FAILURE:
            return {
                ...state,
                fetchEntrepriseIDLoading: false,
                fetchEntrepriseIDError: action.payload.error,
            }

        case FETCH_ADDENTREPRISE_BEGIN :
            return{
                ...state,
                entrepriseFetching:true,
                }
        case FETCH_ADDENTREPRISE_SUCCESS :
            return{
                ...state,
                entrepriseFetching:false,
                entreprises :[
                    ...state.entreprises,
                    action.payload
                ]
            }        
        case  FETCH_ADDENTREPRISE_FAILURE:
            return {
                ...state,
                entrepriseFetching: false,
                fetchAddingEntrepriseError:action.payload.error,
            }
        
            
        case FETCH_UPDATEENTREPRISE_BEGIN :
            return{
                 ...state,
                    entrepriseFetching:true,
                    }
        case FETCH_UPDATEENTREPRISE_SUCCESS :
            return{
                ...state,
                entrepriseFetching:false,
                entreprises :[
                    ...state.entreprises,
                    action.payload
                ]
            }        
        case  FETCH_UPDATEENTREPRISE_FAILURE:
            return {
                ...state,
                entrepriseFetching: false,
                fetchUpdateEntrepriseError:action.payload.error,
            }

        case FETCH_DELETEENTREPRISE_BEGIN :
                return{
                    ...state,
                    entrepriseFetching:true,
                }


        case FETCH_DELETEENTREPRISE_SUCCESS:
                return{
                    ...state,
                    entrepriseFetching:false,
                    entreprises :[
                        ...state.entreprises,
                        action.payload
                    ]
                    }        
       case  FETCH_DELETEENTREPRISE_FAILURE:
                return {
                    ...state,
                    entrepriseFetching: false,
                    fetchDeleteEntrepriseError:action.payload.error,
                    }   
                    


                    case FETCH_ADDFILIALEE_BEGIN :
                return{
                    ...state,
                    entrepriseFetching:true,
                }


        case FETCH_ADDFILIALEE_SUCCESS:
                return{
                    ...state,
                    entrepriseFetching:false,
                    entreprises :[
                        ...state.entreprises,
                        action.payload
                    ]
                    }        
       case  FETCH_ADDFILIALEE_FAILURE:
                return {
                    ...state,
                    entrepriseFetching: false,
                    fetchAddFilialeEntreError:action.payload.error,
                    }    
       
        default:
            return state;
    }
}
export default entrepriseReducer;