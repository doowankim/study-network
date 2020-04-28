// import React from 'react';
// import classname from 'classnames';
// import PropTypes from 'prop-types';
//
// const SelectListGroup = ({
//     name,
//     options,
//     value,
//     error,
//     onChange
// }) => {
//     const selectOptions = options.map(a => {
//         <option
//             key={a.label}
//             value={a.value}
//         >
//             {a.label}
//         </option>
//     });
//     return (
//         <div className="dropdown-menu">
//             <select
//                 className={classname('dropdown-item', {
//                     'is-invalid': error
//                 })}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//             >
//                 {selectOptions}
//             </select>
//             {error && <div className="invalid-feedback">{error}</div>}
//         </div>
//     )
// }
//
// SelectListGroup.propTypes = {
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     error: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     options: PropTypes.array.isRequired
// };
//
// export default SelectListGroup;
