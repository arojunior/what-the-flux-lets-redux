import axios from 'axios'
import {createAction} from 'redux-actions'

const apiServer = 'https://api.github.com/users/'

export const githubSearch = (payload = null) => ({
  type: 'GITHUB_SUCCESS',
  payload: payload
})

export const searchAction = username => {
  return axios.get(apiServer + username).then(response => {
    return githubSearch(response.data)
  })
}
