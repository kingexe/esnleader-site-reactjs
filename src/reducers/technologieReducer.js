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
} from '../actions/types';

export const initialState = {
    technologies: [],
    fetchTechnologieLoading:false,
    fetchTechnologieError: null,
    fetchTechnologieIDLoading:false,
    fetchTechnologieIDError: null,
    technologieFetching:false,
    fetchAddingTechnologieError : null,
    fetchUpdateTechnologieError:null,
    fetchDeleteTechnologieError:null,
}

const technologieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TECHNOLOGIE_BEGIN:
            return {
                ...state,
                fetchTechnologieLoading: true,
                fetchTechnologieError: null,

            }
        case FETCH_TECHNOLOGIE_SUCCESS:
            return {
                ...state,
                fetchTechnologieLoading: false,
                technologies: action.payload,

            }
        case FETCH_TECHNOLOGIE_FAILURE:
            return {
                ...state,
                fetchTechnologieLoading: false,
                fetchTechnologieError: action.payload.error,
            }


            case FETCH_TECHNOLOGIEID_BEGIN:
            return {
                ...state,
                fetchTechnologieLoading: true,
                fetchTechnologieIDError: null,

            }
        case FETCH_TECHNOLOGIEID_SUCCESS:
            return {
                ...state,
                fetchTechnologieIDLoading: false,
                technologies: action.payload,

            }
        case FETCH_TECHNOLOGIEID_FAILURE:
            return {
                ...state,
                fetchTechnologieIDLoading: false,
                fetchTechnologieIDError: action.payload.error,
            }

        case FETCH_ADDTECHNOLOGIE_BEGIN :
            return{
                ...state,
                technologieFetching:true,
                }
        case FETCH_ADDTECHNOLOGIE_SUCCESS :
            return{
                ...state,
                technologieFetching:false,
                technologies :[
                    ...state.technologies,
                    action.payload
                ]
            }        
        case  FETCH_ADDTECHNOLOGIE_FAILURE:
            return {
                ...state,
                technologieFetching: false,
                fetchAddingTechnologieError:action.payload.error,
            }
        
            
        case FETCH_UPDATETECHNOLOGIE_BEGIN :
            return{
                 ...state,
                    technologieFetching:true,
                    }
        case FETCH_UPDATETECHNOLOGIE_SUCCESS :
            return{
                ...state,
                technologieFetching:false,
                technologies :[
                    ...state.technologies,
                    action.payload
                ]
            }        
        case  FETCH_UPDATETECHNOLOGIE_FAILURE:
            return {
                ...state,
                technologieFetching: false,
                fetchUpdateTechnologieError:action.payload.error,
            }

        case FETCH_DELETETECHNOLOGIE_BEGIN :
                return{
                    ...state,
                    technologieFetching:true,
                }


        case FETCH_DELETETECHNOLOGIE_SUCCESS:
                return{
                    ...state,
                    technologieFetching:false,
                    technologies :[
                        ...state.technologies,
                        action.payload
                    ]
                    }        
       case  FETCH_DELETETECHNOLOGIE_FAILURE:
                return {
                    ...state,
                    technologieFetching: false,
                    fetchDeleteTechnologieError:action.payload.error,
                    }   
                    


       
        default:
            return state;
    }
}
export default technologieReducer;