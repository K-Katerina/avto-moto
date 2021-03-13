import React, {useState} from 'react';
import {Tab} from '../tab/tab';
import {Characteristics} from '../characteristics/characteristics';
import {Reviews} from '../reviews/reviews';
import {Contacts} from '../contacts/contacts';
import PropTypes from 'prop-types';

const Tabs = ({className}) => {
    const [tab, setTab] = useState('characteristics');
    return (
        <section className={`tabs ${className}`}>
            <div className="tabs__wrapper">
                <Tab onClick={() => setTab('characteristics')}
                     className={`tabs__characteristics-btn ${tab === 'characteristics' && 'tab--active'}`}
                     nameButton='Характеристики'/>
                <Tab onClick={() => setTab('reviews')}
                     className={`tabs__reviews-btn ${tab === 'reviews' && 'tab--active'}`}
                     nameButton='Отзывы'/>
                <Tab onClick={() => setTab('contacts')}
                     className={`tabs__contacts-btn ${tab === 'contacts' && 'tab--active'}`}
                     nameButton='Контакты'/>
            </div>

            {tab === 'characteristics' && <Characteristics className="tabs__characteristics"/>}
            {tab === 'reviews' && <Reviews className="tabs__reviews"/>}
            {tab === 'contacts' && <Contacts className="tabs__contacts"/>}
        </section>
    );
};

Tabs.propTypes = {
    className: PropTypes.string
};

export {Tabs};
