import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as ArrowImg} from '../arrow/arrow.svg';

const Arrow = ({isRotate = false}) => {
    return (
        <button className="arrow">
            <ArrowImg className={`arrow__img ${isRotate && 'rotate180'}`}/>
        </button>
    );
};

Arrow.propTypes = {
    isRotate: PropTypes.bool
};

export {Arrow};
