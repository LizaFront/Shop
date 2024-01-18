import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

import store from './store/store';

import GlobalStyles from './assets/styles/global.styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
                <GlobalStyles />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
