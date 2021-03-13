import React from 'react';
import PropTypes from 'prop-types';
import {LinkButton} from '../link-button/link-button';
import {ReviewsList} from '../reviews-list/reviews-list';

const Reviews = ({className}) => {

    return (
        <article className={`reviews ${className}`}>
            <h2 className="visually-hidden reviews__title">Отзывы</h2>
            <LinkButton className="reviews__btn" nameButton="оставить отзыв" isOutline={true}/>
            <ReviewsList className="reviews__list"/>
        </article>
    );
};

Reviews.propTypes = {
    className: PropTypes.string
};

export {Reviews};
