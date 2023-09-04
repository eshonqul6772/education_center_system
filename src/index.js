import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query'

import 'assets/styles/main.scss';

import Auth from 'reducers/containers';

import App from 'App';

import store from 'reducers/store';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <Auth>
                        <App/>
                    </Auth>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    </QueryClientProvider>
);
