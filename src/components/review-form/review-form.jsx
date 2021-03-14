import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {Textarea} from '../textarea/textarea';
import {RatingBar} from '../rating-bar/rating-bar';
import {CloseButton} from '../close-button/close-button';
import {openModal} from '../../store/actions/actions';

const ReviewForm = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.isOpenModal);
    const overlayRef = useRef();

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
        dispatch(openModal(false));
    };

    const onSubmit = () => {
        dispatch(openModal(false));
    };

    const onOverlayClick = (evt) => {
        evt.target === overlayRef.current && closeForm();
    };

    return (
        <>
            {isOpen &&
            <div className="overlay" ref={overlayRef} onClick={onOverlayClick}>
                <form className="review-form" >
                    <h2 className="review-form__title">Оставить отзыв</h2>
                    <CloseButton onClick={closeForm}/>
                    <div className="review-form__wrapper">
                        <div className="review-form__left">
                            <Input onChange={() => console.log('name')} className="review-form__input"
                                   placeholder={'Имя'} isMandatory={true}/>
                            <Input onChange={() => console.log('++++')} className="review-form__input"
                                   placeholder={'Достоинства'}/>
                            <Input onChange={() => console.log('----')} className="review-form__input"
                                   placeholder={'Недостатки'}/>
                        </div>
                        <div className="review-form__right">
                            <span className="review-form__rating">Оцените товар:<RatingBar rating={4}/></span>
                            <Textarea onChange={() => console.log('textarea')} className="review-form__textarea"
                                      placeholder={'Комментарий'} isMandatory={true}/>
                        </div>
                    </div>
                    <Button onClick={onSubmit}
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
