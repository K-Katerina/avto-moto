import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({nameButton = 'Кнопка', className, isOutline = false}) => {
    return (
        <a href="/" className={`link-button ${className} ${isOutline && 'link-button--outline'}`}>
            {nameButton}
        </a>
    );
};

LinkButton.propTypes = {
    className: PropTypes.string,
    nameButton: PropTypes.string,
    isOutline: PropTypes.bool
};

export {LinkButton};
