import {createAction} from "redux-actions"
import axios from "axios"

const apiServer = "https://api.spotify.com/v1/search"

const spotifySearchAction = query => {
  const queries = [
    axios.get(apiServer, {params: {q: query, type: "artist"}}),
    axios.get(apiServer, {params: {q: query, type: "track"}}),
    axios.get(apiServer, {params: {q: query, type: "playlist"}})
  ]

  return axios.all(queries).then(
    axios.spread((artist, track, playlist) => ({
      artists: artist.data.artists.items,
      tracks: track.data.tracks.items,
      playlists: playlist.data.playlists.items
    }))
  )
}

export const SPOTIFY_SEARCH = "modules/Spotify/SEARCH"
export const spotifySearch = createAction(SPOTIFY_SEARCH, spotifySearchAction)
