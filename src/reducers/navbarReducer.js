import {
    FETCH_USER_SUCCESS, FETCH_USER_BEGIN, FETCH_USER_FAILURE, FETCH_USER_GRADE_SUCCESS,
    FETCH_USER_GRADE_BEGIN, FETCH_USER_GRADE_FAILURE
} from '../actions/types';

export const initialState = {
    user: [],
    userConfig: null,
    fetchUserLoading: false,
    fetchUserError: null
}


const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_BEGIN:
            return {
                ...state,
                fetchUserLoading: true,
                fetchUserError: null,

            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                fetchUserLoading: false,
                user: action.payload.userinfo,

            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                fetchUserLoading: false,
                fetchUserError: action.payload.error,
            }

        case FETCH_USER_GRADE_BEGIN:
            return {
                ...state,
                fetchUserLoading: true,
                fetchUserError: null,

            }
        case FETCH_USER_GRADE_SUCCESS:
            return {
                ...state,
                fetchUserLoading: false,
                userConfig: action.payload,

            }
        case FETCH_USER_GRADE_FAILURE:
            return {
                ...state,
                fetchUserLoading: false,
                fetchUserError: action.payload.error,
            }
        default:
            return state;
    }
}
export default navbarReducer;
