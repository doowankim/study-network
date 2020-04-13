const Validator = require('validator');
const is_Empty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !is_Empty(data.email) ? data.email : '';
    data.password = !is_Empty(data.password) ? data.password : '';


    if(!Validator.isEmail(data.email)) {
        errors.msg = 'Email is invalid'
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required'
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required'
    }



    return {
        errors,
        isValid: is_Empty(errors)
    };

};