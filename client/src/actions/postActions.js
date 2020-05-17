import axios from 'axios';
import {
    GET_POSTS,
    GET_ERRORS,
    CLEAR_CURRENT_POST,
    POST_LOADING
} from "./type";

export const createPost = (postData, history) => dispatch => {
    axios
        .post('/posts', postData)
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setPostLoading = () => {
    return {
        type: POST_LOADING
    };
};

export const clearCurrentPost = () => {
    return {
        type: CLEAR_CURRENT_POST
    };
};

export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get('/posts/total')
        .then(res =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        )
};

export const getPostById = id => dispatch => {
    axios
        .get(`/posts/${id}`)
        .then(res =>
                dispatch({
                    type: GET_POSTS,
                    payload: res.data
                })
            )
            .catch(err =>
                    dispatch({
                        type: GET_ERRORS,
                        payload: null
                    })
                );
};