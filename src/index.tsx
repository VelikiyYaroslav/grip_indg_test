import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from "./Store";
import App from './App';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
