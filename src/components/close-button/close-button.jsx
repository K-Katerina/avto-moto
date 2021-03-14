import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({onClick}) => {

    return (
        <button className="close-button" onClick={() => onClick()} type="button">Закрыть</button>
    );
};

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export {CloseButton};
