import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({className, placeholder, value, label, isMandatory = false, onChange, name}) => {
    return (
        <div className={`${className} ${isMandatory && 'textarea--mandatory'} ${label && 'textarea--error'} textarea`}>
            <span className="textarea__error">
              {label}
            </span>
            <textarea name={name} value={value} placeholder={placeholder} onChange={(evt) => onChange(evt)} rows="6"
                      className="textarea__block"></textarea>
        </div>
    );
};

Textarea.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    isMandatory: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export {Textarea};
