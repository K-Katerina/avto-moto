import React from 'react';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';
import {Description} from '../components/description/description';

const CarPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Description/>
            <Footer/>
        </React.Fragment>
    );
};

export {CarPage};
