import {
    FETCH_FILIALE_SUCCESS, FETCH_FILIALE_BEGIN, FETCH_FILIALE_FAILURE,FETCH_ADDFILIALE_BEGIN,
    FETCH_ADDFILIALE_SUCCESS,FETCH_ADDFILIALE_FAILURE,
    FETCH_UPDATEFILIALE_BEGIN,
    FETCH_UPDATEFILIALE_SUCCESS,FETCH_UPDATEFILIALE_FAILURE,
    FETCH_DELETEFILIALE_BEGIN,
    FETCH_DELETEFILIALE_SUCCESS,FETCH_DELETEFILIALE_FAILURE,
    FETCH_FILIALEEID_SUCCESS,
    FETCH_FILIALEEID_BEGIN,
    FETCH_FILIALEEID_FAILURE,
    FETCH_ADDFILIALEPRO_BEGIN,
    FETCH_ADDFILIALEPRO_SUCCES,
    FETCH_ADDFILIALEPRO_FAILURE,
} from '../actions/types';

export const initialState = {
    filiales: [],
    fetchFilialeLoading:false,
    fetchFilialeError: null,
    fetchFilialeIDLoading:false,
    fetchFilialeIDError: null,
    filialeFetching:false,
    fetchAddingFilialeError : null,
    fetchUpdateFilialeError:null,
    fetchDeleteFilialeError:null,
    fetchAddProjetFilialeError:null,
}


const filialeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILIALE_BEGIN:
            return {
                ...state,
                fetchFilialeLoading: true,
                fetchFilialeError: null,

            }
        case FETCH_FILIALE_SUCCESS:
            return {
                ...state,
                fetchFilialeLoading: false,
                filiales: action.payload,

            }
        case FETCH_FILIALE_FAILURE:
            return {
                ...state,
                fetchFilialeLoading: false,
                fetchFilialeError: action.payload.error,
            }


        case FETCH_FILIALEEID_BEGIN:
            return {
                ...state,
                fetchFilialeLoading: true,
               fetchFilialeIDError: null,

            }
        case FETCH_FILIALEEID_SUCCESS:
            return {
                ...state,
                fetchFilialeIDLoading: false,
                filiales: action.payload,

            }
            
        case FETCH_FILIALEEID_FAILURE:
            return {
                ...state,
                fetchFilialeIDLoading: false,
               fetchFilialeIDError: action.payload.error,
            }

        case FETCH_ADDFILIALE_BEGIN :
            return{
                ...state,
                filialeFetching:true,
                }
        case FETCH_ADDFILIALE_SUCCESS :
            return{
                ...state,
                filialeFetching:false,
                filiales :[
                    ...state.filiales,
                    action.payload
                ]
            }        
        case  FETCH_ADDFILIALE_FAILURE:
            return {
                ...state,
                filialeFetching: false,
                fetchAddingFilialeError:action.payload.error,
            }
        
            
        case FETCH_UPDATEFILIALE_BEGIN :
            return{
                 ...state,
                    filialeFetching:true,
                    }
        case FETCH_UPDATEFILIALE_SUCCESS :
            return{
                ...state,
                filialeFetching:false,
                filiales :[
                    ...state.filiales,
                    action.payload
                ]
            }        
        case  FETCH_UPDATEFILIALE_FAILURE:
            return {
                ...state,
                filialeFetching: false,
                fetchUpdateFilialeError:action.payload.error,
            }

        case FETCH_DELETEFILIALE_BEGIN :
                return{
                    ...state,
                    filialeFetching:true,
                }


        case FETCH_DELETEFILIALE_SUCCESS:
                return{
                    ...state,
                    filialeFetching:false,
                    filiales :[
                        ...state.filiales,
                        action.payload
                    ]
                    }        
       case  FETCH_DELETEFILIALE_FAILURE:
                return {
                    ...state,
                    filialeFetching: false,
                    fetchDeleteFilialeError:action.payload.error,
                    }   
                    
                    
         case FETCH_ADDFILIALEPRO_BEGIN :
                 return{
                     ...state,
                      filialeFetching:true,
                        }
        
        
        case FETCH_ADDFILIALEPRO_SUCCES:
                        return{
                            ...state,
                            filialeFetching:false,
                            filiales :[
                                ...state.filiales,
                                action.payload
                            ]
                            }        
        case  FETCH_ADDFILIALEPRO_FAILURE:
                        return {
                            ...state,
                            filialeFetching: false,
                            fetchAddProjetFilialeError:action.payload.error,
                            }  
       
        default:
            return state;
    }
}
export default filialeReducer;