const initialState = {
  sending: false,
  user: null,
  counter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GITHUB_SENDING':
      return {
        ...state,
        sending: true
      }
    case 'GITHUB_SUCCESS':
      return {
        ...state,
        sending: false,
        user: action.payload,
        counter: state.counter + 1
      }
    case 'GITHUB_ERROR':
      return {
        ...state,
        sending: false
      }
    default:
      return state
  }
}
