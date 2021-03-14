import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({className, placeholder, label, isMandatory = false, onChange}) => {
    return (
        <div className={`${className} ${isMandatory && 'textarea--mandatory'} textarea`}>
            <span className="textarea__error">
              {label}
            </span>
            <textarea placeholder={placeholder} onChange={() => onChange()} rows="6" className="textarea__block"></textarea>
        </div>
    );
};

Textarea.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    isMandatory: PropTypes.bool,
    onChange: PropTypes.func
};

export {Textarea};
