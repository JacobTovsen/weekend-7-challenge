import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';;

const feedbackReducer = (state={}, action) => {
    if(action.type === 'SET_FEELING_TODAY') {
        return {
            ...state,
            feelingToday: action.payload
        }
    } else if (action.type === 'SET_UNDERSTANDING_CONTENT'){
        return {
            ...state,
            understandingContent: action.payload
        }
    } else if (action.type === 'SET_BEING_SUPPORTED'){
        return {
            ...state,
            beingSupported: action.payload
        }
    } else if (action.type === 'SET_ADDITIONAL_COMMENT'){
        return {
            ...state,
            additionalComment: action.payload
        }
    } else if (action.type === 'CLEAR_STATE'){
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
