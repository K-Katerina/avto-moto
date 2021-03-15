import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({nameButton, onClick, className}) => {
    return (
        <button onClick={() => onClick()}
                className={`tab ${className}`}
                type="button">
            {nameButton}
        </button>
    );
};

Tab.propTypes = {
    className: PropTypes.string.isRequired,
    nameButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export {Tab};
