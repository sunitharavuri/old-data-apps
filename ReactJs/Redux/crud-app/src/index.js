import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter  } from 'react-router-dom';

const store=createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    );
ReactDOM.render(
    
    
    <BrowserRouter>
    <Provider  store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
