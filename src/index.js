import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import thunkMiddleawe from "redux-thunk";

import reducer from "./store/reducer";

const store = createStore(reducer, applyMiddleware(thunkMiddleawe));

const app =(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
