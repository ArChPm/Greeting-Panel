import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import App from './App';
import i18n from './i18n';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'

const store = configureStore();
ReactDOM.render(
    <I18nextProvider i18n={ i18n() }>
        <Provider store={store}>
            <App i18n={ i18n()}/>
        </Provider>
    </I18nextProvider>
    ,document.getElementById('root'));
serviceWorker.unregister();
