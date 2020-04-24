import {
    GET_POST,
    POST_LOADING,
    CLEAR_CURRENT_POST
} from "../actions/type";

const initialState = {
    post: null,
    posts: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_POST:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_POST:
            return {
                ...state,
                posts: null
            };
        default:
            return state;
    }
}