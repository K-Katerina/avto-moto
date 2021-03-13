import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({className}) => {
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
                        <span className="reviews-list__rating">33333</span>
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
