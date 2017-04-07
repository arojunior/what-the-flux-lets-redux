import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import promiseMiddleware    from 'redux-promise'

import Spotify              from './Spotify'
import Netflix              from './Netflix'

const devTools = window.devToolsExtension
    ? window.devToolsExtension()
    : f => f

const combineReducer = combineReducers({
    Spotify,
    Netflix,
    form : formReducer
})

export const store = createStore(combineReducer, {},
    compose(applyMiddleware(promiseMiddleware), devTools)
)
