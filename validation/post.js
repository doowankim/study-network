const Validator = require('validator');
const is_Empty = require('./isEmpty');

module.exports = function validatePostInput(data){
    let errors = {};

    data.text = !is_Empty(data.text) ? data.text : '';

    if(!Validator.isLength(data.text, { min: 10, max: 300 })){
        errors.text = 'Post must be between 10 and 300 characters'
    }

    if(!Validator.isLength(data.title, { min: 10, max: 30000 })){
        errors.title = 'Post must be between 10 and 30000 characters'
    }

    if(Validator.isEmpty(data.text)){
        errors.text = 'Text is required'
    }

    if(Validator.isEmpty(data.title)){
        errors.title = 'Title is required'
    }

    return {
        errors,
        isValid: is_Empty(errors)
    }
};