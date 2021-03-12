import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({nameButton = 'Таб', onClick, className}) => {
    return (
        <button onClick={() => onClick()}
                className={`tab ${className}`}
                type="button">
            {nameButton}
        </button>
    );
};

Tab.propTypes = {
    className: PropTypes.string,
    nameButton: PropTypes.string,
    onClick: PropTypes.func
};

export {Tab};
