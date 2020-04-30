import {
    GET_ERRORS,
    SET_CURRENT_USER
} from "./type";
import axios from 'axios';

export const deleteAccount = () => dispatch => {
    if (window.confirm('정말 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
        axios
            .delete('/profile')
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};