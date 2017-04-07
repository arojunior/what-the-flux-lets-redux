import axios from 'axios'
import {createAction} from 'redux-actions'

const apiServer = 'http://netflixroulette.net/api/api.php?title='

const netflixSearchAction = value => {

    return axios.get(apiServer + value.replace(/\s/ig, "%20"))
           .then(res => res.data)
           .catch(err => err)

}

export const NETFLIX_SEARCH = 'modules/netflix/NETFLIX_SEARCH'
export const netflixSearch  = createAction(NETFLIX_SEARCH, netflixSearchAction)
