import {Actions} from '../../const';

const initialState = {
    isOpenModal: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.OPEN_MODAL:
            return {
                ...state,
                isOpenModal: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
