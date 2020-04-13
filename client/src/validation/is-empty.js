const isEmpty = value => //조건 만족 : true, 만족하지 않으면 : false
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;