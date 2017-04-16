import React from "react"

export default ({ props }) => {
  const artists = props.artists.map((artist, key) => (
    <div className="list-group" key={key}>
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        className="list-group-item"
      >
        <h4 className="list-group-item-heading">{artist.name}</h4>
        <p className="list-group-item-text" />
      </a>
    </div>
  ))

  const playlists = props.playlists.map((playlist, key) => (
    <div className="list-group" key={key}>
      <a
        href={playlist.external_urls.spotify}
        target="_blank"
        className="list-group-item"
      >
        <h4 className="list-group-item-heading">{playlist.name}</h4>
        <p className="list-group-item-text" />
      </a>
    </div>
  ))

  const tracks = props.tracks.map((track, key) => (
    <div className="list-group" key={key}>
      <a
        href={track.external_urls.spotify}
        target="_blank"
        className="list-group-item"
      >
        <h4 className="list-group-item-heading">{track.name}</h4>
        <p className="list-group-item-text" />
      </a>
    </div>
  ))

  return (
    <div>
      <h3>Artists</h3>
      {artists}
      <h3>Playlists</h3>
      {playlists}
      <h3>Tracks</h3>
      {tracks}
    </div>
  )
}
