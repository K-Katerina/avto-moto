import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({nameButton = 'Кнопка', className}) => {
    return (
        <a className={`link-button ${className}`}>
            {nameButton}
        </a>
    );
};

LinkButton.propTypes = {
    className: PropTypes.string,
    nameButton: PropTypes.string,
};

export {LinkButton};
