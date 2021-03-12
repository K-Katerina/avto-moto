import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as ArrowImg} from '../arrow/arrow.svg';

const Arrow = ({isRotate = false, onClick, className, disabled = false}) => {
    return (
        <button onClick={() => onClick()} className={`${className} arrow`} disabled={disabled}>
            <ArrowImg className={`arrow__img ${isRotate && 'rotate180'}`}/>
        </button>
    );
};

Arrow.propTypes = {
    isRotate: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export {Arrow};
