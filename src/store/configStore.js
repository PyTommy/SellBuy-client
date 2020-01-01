import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import alertReducer from '../reducers/alert';
import productReducer from '../reducers/product';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Combine reducers
const rootReducer = combineReducers({
        auth: authReducer,
        alerts: alertReducer,
        product: productReducer
});


export default () => {
    const store = createStore(
        rootReducer, 
        {},
        composeEnhancers(applyMiddleware(...middleware))
    );

    return store;
};