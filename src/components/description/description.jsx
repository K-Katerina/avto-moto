import React from 'react';
import {Button} from '../button/button';
import {LinkButton} from '../link-button/link-button';
import {Tab} from '../tab/tab';

const Description = () => {
    return (
        <div className="description wrapper">
            <Tab onClick={()=>(1)} nameButton="Характеристики"/>
            <Button onClick={()=>(1)} nameButton="Оставить отзыв" type="submit"/>
            <LinkButton nameButton="Оставить заявку"/>
            <LinkButton nameButton="В кредит от 11 000 ₽" className="link-button--outline"/>
        </div>
    );
};

export {Description};
