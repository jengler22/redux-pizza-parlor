import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// React Redux stuffff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// TODO Reducers to make
// Customer Name
const personName = (state = '', action) => {
    if (action.type === 'SET_PERSON_NAME') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}

// Street Address
const streetAddress = (state = '', action) => {
    if (action.type === 'SET_ADDRESS') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}

// City
const city = (state = '', action) => {
    if (action.type === 'SET_CITY') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}

// Zip
const zip = (state = '', action) => {
    if (action.type === 'SET_ZIP') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}

// Order Type
const orderType = (state = '', action) => {
    if (action.type === 'SET_ORDER_TYPE') {
        return action.payload
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}

// Cart Total
const cartTotal = (state = 0, action) => {
    if (action.type === 'SET_CART_TOTAL') {
        return action.payload
    }
    return state;
}

// Cart
const cart = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    } else if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}

const customerInfo = (state = [],  action) => {
    if (action.type === 'SET_CUSTOMER_INFO') {
        return action.payload;
    }
    return state;
}

//! end reducers
//! Oopsies. I forgot to add reducers for pizzas

const pizzas = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers(
        {
            personName,
            streetAddress,
            city,
            zip,
            orderType,
            cartTotal,
            cart,
            // ! Added - gd
            pizzas,
            // Reducers will go here
            customerInfo,
        }
    )

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
