import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {Textarea} from '../textarea/textarea';
import {CloseButton} from '../close-button/close-button';
import {openModal, saveNewReview} from '../../store/actions/actions';
import {RATING_VALUES} from '../../const';
import {RatingStar} from '../rating-star/rating-star';
import {extend} from '../utils';

const ReviewForm = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.isOpenModal);
    const overlayRef = useRef();

    const initialState = {
        name: '',
        dignity: '',
        limitations: '',
        comment: '',
        rating: '0'
    };

    const [review, setReview] = useState({...initialState});
    const {name, dignity, limitations, comment, rating} = review;

    const [isError, setError] = useState({
        name: false,
        comment: false
    });

    const [a, setA] = useState(0);

    const escFunction = (event) => {
        if (event.keyCode === 27) {
            closeForm();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', escFunction);
        return () => {
            document.removeEventListener('keydown', escFunction);
        };
    }, [isOpen]);

    const closeForm = () => {
        setError({name: false, comment: false});
        setReview({...initialState});
        dispatch(openModal(false));
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (name && comment) {
            dispatch(saveNewReview(extend({...review}, {date: new Date()})));
            setReview({...initialState});
            dispatch(openModal(false));
        } else {
            setError({name: !name, comment: !comment});
        }
    };

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target;
        setReview((prevComment) => extend(prevComment, {[name]: value}));
        if (isError.name || isError.comment) {
            setError({name: !review.name, comment: !review.comment});
        }
    };

    const onOverlayClick = (evt) => {
        evt.target === overlayRef.current && closeForm();
    };

    return (
        <>
            {isOpen &&
            <div className="overlay" ref={overlayRef} onClick={onOverlayClick}>
                <form className="review-form">
                    <h2 className="review-form__title">Оставить отзыв</h2>
                    <CloseButton onClick={closeForm}/>
                    <div className="review-form__wrapper">
                        <div className="review-form__left">
                            <Input autoFocus onChange={(evt) => handleFieldChange(evt)} className="review-form__input"
                                   placeholder="Имя" isMandatory={true} name="name" value={name}
                                   label={isError.name ? 'Пожалуйста, заполните поле' : ''}/>
                            <Input onChange={(evt) => handleFieldChange(evt)} className="review-form__input"
                                   placeholder="Достоинства" name="dignity" value={dignity}/>
                            <Input onChange={(evt) => handleFieldChange(evt)} className="review-form__input"
                                   placeholder="Недостатки" name="limitations" value={limitations}/>
                        </div>
                        <div className="review-form__right">
                            {/*  TODO Вынести звездочки в отдельный компонент */}
                            <span className="review-form__rating" onMouseLeave={() => setA(review.rating)}>Оцените товар:
                                {RATING_VALUES.map((value) =>
                                    <React.Fragment key={value}>
                                        <input onChange={(evt) => handleFieldChange(evt)} checked={value === rating}
                                               className="review-form__rating-input visually-hidden" name="rating"
                                               value={value}
                                               id={`${value}-stars`} type="radio"/>
                                        <label htmlFor={`${value}-stars`} className="review-form__rating-label"
                                               title={`${value}-stars`} onMouseOver={() => setA(value)}>
                                            <RatingStar className="review-form__star"
                                                        isChecked={(a || rating) >= value}/>
                                        </label>
                                    </React.Fragment>
                                )}
                            </span>
                            <Textarea onChange={(evt) => handleFieldChange(evt)} className="review-form__textarea"
                                      placeholder="Комментарий" isMandatory={true} name="comment" value={comment}
                                      label={isError.comment ? 'Пожалуйста, заполните поле' : ''}/>
                        </div>
                    </div>
                    <Button onClick={(evt) => onSubmit(evt)}
                            nameButton="Оставить отзыв" type="submit" className="review-form__submit"/>
                </form>
            </div>
            }
        </>
    );
};

ReviewForm.propTypes = {
    isOpen: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func
};

export {ReviewForm};
