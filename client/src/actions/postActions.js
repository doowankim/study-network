import { GET_ERRORS, POST_LOADING } from './type';
import axios from 'axios';

export const createPost = (postData, history) => dispatch => {
    axios
        .post('/posts', postData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// export const setPostLoading = () => {
//     return {
//         type: POST_LOADING
//     };
// };

// export const getCurrentPost = () => dispatch => {
//     dispatch(setPostLoading());
//     axios
//         .get('/posts/total')
//         .then(res =>
//             dispatch({
//                 type: GET_POST,
//                 payload: res.data
//             })  
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: {}
//             })
//         );
// };