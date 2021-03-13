import React from 'react';
import PropTypes from 'prop-types';

const Map = ({className}) => {
    return (
        <article className={`map ${className}`}>
        </article>
    );
};

Map.propTypes = {
    className: PropTypes.string
};

export {Map};
