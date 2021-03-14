import React from 'react';
import PropTypes from 'prop-types';

const Input = ({className, onChange, value, label = '', placeholder, isMandatory = false}) => {
    return (
        <label className={`${className} ${isMandatory && 'input--mandatory'} input`}>
            <span className="input__error">
              {label}
            </span>
            <input onChange={() => onChange()} value={value} placeholder={placeholder} className="input__block"/>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.number,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isMandatory: PropTypes.bool
};

export {Input};
