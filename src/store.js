import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import withReduxEnhancer from 'addon-redux/enhancer';

const createMiddlewareEnhancer = () => {
    const middleware = []
    /*
    if (process.env.NODE_ENV !== 'production') {
        // include other middlewares as needed, like the invariant and logger middlewares
        middleware.push(invariant())
        middleware.push(logger())
    }*/
    middleware.push(thunk);
    return applyMiddleware(...middleware)
}

const createEnhancer = () => {
    const enhancers = []
    enhancers.push(createMiddlewareEnhancer())
    /*if (process.env.NODE_ENV !== 'production') {
        
    }*/
    enhancers.push(withReduxEnhancer);
    return compose(...enhancers)
}



const store = createStore(rootReducer, createEnhancer());

export default store;