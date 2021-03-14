import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import reducer from '../src/store/reducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.scss';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
