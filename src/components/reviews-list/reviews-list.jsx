import React from 'react';
import PropTypes from 'prop-types';
import {RatingStar} from '../rating-star/rating-star';
import {useSelector} from 'react-redux';
import {RATING_VALUES} from '../../const';
import {getDate} from '../utils';

const ReviewsList = ({className}) => {

    const reviews = useSelector(state => state.reviews);

    return (
        <ul className={`reviews-list ${className}`}>
            {reviews.map((review, index) =>
                <li key={index} className="reviews-list__item">
                    <span className="reviews-list__name">{review.name}</span>

                    <span className="reviews-list__txt reviews-list__txt--padding">
                        <b className="reviews-list__title reviews-list__title--dignity">Достоинства</b>
                        {review.dignity}
                    </span>

                    <span className="reviews-list__txt reviews-list__txt--padding">
                        <b className="reviews-list__title reviews-list__title--limitations">Недостатки</b>
                        {review.limitations}
                    </span>

                    <span className="reviews-list__txt">
                        <b className="reviews-list__title reviews-list__title--comment">Комментарий</b>
                        {review.comment}
                    </span>

                    <div className="reviews-list__footer">
                        <div className="reviews-list__rating">
                            {RATING_VALUES.map((value) =>
                                <React.Fragment key={value}>
                                    <RatingStar className="reviews-list__star" isChecked={+review.rating >= +value}/>
                                </React.Fragment>
                            )}
                        </div>
                        <span className="reviews-list__summary">{+review.rating >= 3 ? 'Советует' : 'Не советует'}</span>
                        <time className="reviews-list__time" dateTime={review.date}>{getDate(review.date)}</time>
                        <a className="reviews-list__review" href="/">Ответить</a>
                    </div>
                </li>
            )}
        </ul>
    );
};

ReviewsList.propTypes = {
    className: PropTypes.string
};

export {ReviewsList};
