import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({className, rating}) => {

    const RATING_VALUES = ['1', '2', '3', '4', '5'];

    return (
        <div className={`rating-bar ${className}`}>
            {RATING_VALUES.map((value) =>
                <React.Fragment key={value}>
                    <svg className={`star ${rating >= +value && 'star--checked'}`}
                         width="17" height="16" viewBox="0 0 17 16">
                        <path fill="#BDBEC2" opacity="0.7"
                              d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z"/>
                    </svg>
                </React.Fragment>
            )}
        </div>
    );
};

RatingBar.propTypes = {
    className: PropTypes.string,
    rating: PropTypes.number
};

export {RatingBar};
