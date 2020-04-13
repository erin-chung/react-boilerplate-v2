import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
//reducers import
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export default () => {
    const store = createStore(
        combineReducers({
            //reducers
            auth: authReducer
        }),
        //composeEnhancers(applyMiddleware(thunk)) -- did not work without extension
        applyMiddleware(thunk)
    )
    return store
}