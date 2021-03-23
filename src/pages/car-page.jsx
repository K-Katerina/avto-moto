import React from 'react';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';
import {Description} from '../components/description/description';
import {ReviewForm} from '../components/review-form/review-form';
import {useSelector} from 'react-redux';

const CarPage = () => {
    const isOpen = useSelector(state => state.isOpenModal);
    return (
        <React.Fragment>
            <Header/>
            {isOpen && <ReviewForm/>}
            <Description/>
            <Footer/>
        </React.Fragment>
    );
};

export {CarPage};
