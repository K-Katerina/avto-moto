import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({className}) => {

    const RATING_VALUES = ['5', '4', '3', '2', '1'];
    const temporaryVariable = 3;

    return (
        <article className={`reviews ${className}`}>
            <h2 className="visually-hidden reviews__title">Отзывы</h2>
            <ul className="reviews__list reviews-list">
                <li className="reviews-list__item">
                    <span className="reviews-list__name">Борис Иванов</span>

                    <span className="reviews-list__txt reviews-list__txt--padding">
                        <b className="reviews-list__title reviews-list__title--dignity">Достоинства</b>
                        мощность, внешний вид
                    </span>

                    <span className="reviews-list__txt reviews-list__txt--padding">
                        <b className="reviews-list__title reviews-list__title--limitations">Недостатки</b>
                        Слабые тормозные колодки (пришлось заменить)
                    </span>

                    <span className="reviews-list__txt">
                        <b className="reviews-list__title reviews-list__title--comment">Комментарий</b>
                        Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
                    </span>

                    <div className="reviews-list__footer">
                        <span className="reviews-list__rating">
                            {RATING_VALUES.map((value) =>
                                <React.Fragment key={value}>
                                    <svg className={`star ${temporaryVariable <= value && 'star--checked'}`}
                                         width="17" height="16" viewBox="0 0 17 16">
                                        <path fill="#BDBEC2" opacity="0.7"
                                              d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z"/>
                                    </svg>
                                </React.Fragment>
                            )}
                        </span>
                        <span className="reviews-list__summary">Советует</span>
                        <span className="reviews-list__time">1 минуту назад</span>
                        <a className="reviews-list__review" href="/">Ответить</a>
                    </div>
                </li>
            </ul>
        </article>
    );
};

Reviews.propTypes =
    {
        className: PropTypes.string
    }
;

export
{
    Reviews
}
    ;
