import {handleAction} from 'redux-actions'
import {SPOTIFY_SEARCH} from './actions'

const initialState = {
    result : null
}

const reducer = (state = initialState, action) => ({
  ...state,
  result : action.payload
})

export default handleAction(SPOTIFY_SEARCH, reducer, initialState)
