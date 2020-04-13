const Validator = require('validator');
const is_Empty = require('./isEmpty');

// sign up 시 validation

module.exports = function validateRegisterInput(data) {
    let errors = {}; //error가 생겼을 때 저장

    data.name = !is_Empty(data.name) ? data.name : '';  //!isEmpty가 참이라면 data.name에 있는 값이 사용자 입력값, 거짓이라면 '': 빈칸이라는 뜻
    data.email = !is_Empty(data.email) ? data.email : '';
    data.password = !is_Empty(data.password) ? data.password : '';
    data.password2 = !is_Empty(data.password2) ? data.password2 : ''; //confirm password

    //user name의 character
    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30})) {
        errors.password = 'Password must be at least 6 characters';
    }




    if (Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    if (Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm password is required';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: is_Empty(errors) //빈 값이 있으면 error를 isValid에 담아서 보내준다
    };


};