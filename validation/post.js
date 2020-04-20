const Validator = require('validator');
const is_Empty = require('./isEmpty');

module.exports = function validatePostInput(data){
    let errors = {};

    data.text = !is_Empty(data.text) ? data.text : '';
    data.title = !is_Empty(data.title) ? data.title : '';

    if(!Validator.isLength(data.text, { min: 10, max: 300 })){
        errors.text = 'Text must be between 10 and 300 characters'
    }

    if(!Validator.isLength(data.title, { min: 2, max: 300 })){
        errors.title = "Title must be between 2 and 300 characters"
    }

    if(Validator.isEmpty(data.text)){
        errors.text = 'Text field is required'
    }

    if(Validator.isEmpty(data.title)){
        errors.title = 'Title Field is required'
    }

    return {
        errors,
        isValid: is_Empty(errors)
    }
};