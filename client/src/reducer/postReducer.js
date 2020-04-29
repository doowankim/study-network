import {
    POST_LOADING,
    CLEAR_CURRENT_POST,
    GET_POSTS
} from "../actions/type";

const initialState = {
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
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case CLEAR_CURRENT_POST:
            return {
                ...state,
                post: null
            };
        default:
            return state;
    }
}