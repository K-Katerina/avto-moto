import React from 'react';
import PropTypes from 'prop-types';

const Input = ({className, autoFocus, onChange, value, label = '', placeholder, isMandatory = false, name}) => {
    return (
        <label className={`${className} ${isMandatory && 'input--mandatory'} ${label && 'input--error'} input`}>
            <span className="input__error">
              {label}
            </span>
            <input onChange={(evt) => onChange(evt)} value={value}
                   placeholder={placeholder} autoFocus={autoFocus} name={name} className="input__block"/>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isMandatory: PropTypes.bool
};

export {Input};
