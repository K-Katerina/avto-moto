import React from 'react';
import PropTypes from 'prop-types';

const Button = ({nameButton = 'Кнопка', onClick, className, disabled = false, type = 'button', isOutline}) => {
    return (
        <button onClick={(evt) => onClick(evt)}
                disabled={disabled}
                className={`button ${className} ${isOutline && 'link-button--outline'}`}
                type={type}>
            {nameButton}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    nameButton: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    isOutline: PropTypes.bool,
    disabled: PropTypes.bool
};

export {Button};
