import {handleAction} from "redux-actions"
import {NETFLIX_SEARCH} from "./actions"

const initialState = {
  result: null
}

const reducer = (state = initialState, action) => ({
  result: action.payload
})

export default handleAction(NETFLIX_SEARCH, reducer, initialState)
