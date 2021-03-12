import React from 'react';
import {LinkButton} from '../link-button/link-button';
import {Slider} from '../slider/slider';
import {IconList} from '../icon-list/icon-list';

const Description = () => {
    return (
        <main className="wrapper description">
            <Slider className="description__slider"/>
            <div className="description__wrapper">
                <h1 className="description__title">Марпех 11</h1>
                <IconList className="description__icons"/>
                <p className="description__price">
                    <span className="description__new-price">2 300 000 ₽</span>
                    <small className="description__old-price">2 400 000 ₽</small>
                </p>
                <LinkButton nameButton="Оставить заявку" className="description__btn"/>
                <LinkButton nameButton="В кредит от 11 000 ₽" className="description__btn link-button--outline"/>
            </div>
        </main>
    );
};

export {Description};
