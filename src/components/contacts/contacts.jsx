import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({className}) => {
    return (
        <article className={`contact ${className}`}>
            <h2 className="visually-hidden contact__title">Контакты</h2>
            Контакты
        </article>
    );
};

Contacts.propTypes = {
    className: PropTypes.string
};

export {Contacts};
