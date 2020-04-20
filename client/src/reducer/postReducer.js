import { POST_LOADING } from '../actions/type';

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
        default:
            return state;
    }
}