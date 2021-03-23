import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as LogoImg} from './logo.svg';
import {ReactComponent as LogoImgTxt} from './logo-txt.svg';

const Logo = ({className}) => {
    return (
        <a href="/" className={`${className} logo`}>
            <LogoImg alt="Логотип" className="logo__img"/>
            <LogoImgTxt className="logo__txt"/>
            <span className="visually-hidden">Главная страница</span>
        </a>
    );
};

Logo.propTypes = {
    className: PropTypes.string.isRequired
};

export {Logo};
