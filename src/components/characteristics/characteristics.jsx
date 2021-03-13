import React from 'react';
import PropTypes from 'prop-types';

const Characteristics = ({className}) => {
    return (
        <article className={`characteristics ${className}`}>
            <h2 className="visually-hidden characteristics__title">Характеристики</h2>
            <div>Характеристики</div>
        </article>
    );
};

Characteristics.propTypes = {
    className: PropTypes.string
};

export {Characteristics};
