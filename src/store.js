import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import fullScreenCircuralProgress from './state/fullScreenCircuralProgress'
import snackbars from './state/snackbar'
import drawer from './state/drawer'

const reducer = combineReducers({
    fullScreenCircuralProgress,
    snackbars,
    drawer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)