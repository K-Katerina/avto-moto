import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({className}) => {
    return (
        <article className={`reviews ${className}`}>
            <h2 className="visually-hidden reviews__title">Отзывы</h2>
            Отзывы
        </article>
    );
};

Reviews.propTypes = {
    className: PropTypes.string
};

export {Reviews};
