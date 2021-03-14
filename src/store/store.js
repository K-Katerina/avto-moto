import {createStore} from 'redux';
import {REVIEWS_STORAGE_KEY} from '../const';
import reducer from './reducers/reducer';

const initialState = {
    reviews: [{
        name: 'Борис Иванов',
        dignity: 'мощность, внешний вид',
        limitations: 'Слабые тормозные колодки (пришлось заменить)',
        comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
        rating: '3'
    }],
    isOpenModal: false
};

export const loadState = () => {
    try {
        return JSON.parse(localStorage.getItem(REVIEWS_STORAGE_KEY)) || initialState;
    } catch (err) {
        localStorage.removeItem(REVIEWS_STORAGE_KEY);
        return initialState;
    }
};

export const saveState = (state) => {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(state));
};

export const initStore = () => {
    const persistedState = loadState();
    const store = createStore(
        reducer, persistedState
    );
    store.subscribe(() => saveState(store.getState()));
    return store;
};
