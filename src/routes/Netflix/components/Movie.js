import React from "react"

const Movie = ({ props }) => (
  <div className="col-md-12">
    <div className="col-md-6">
      <img src={props.poster} alt={props.title} className="img-responsive" />
    </div>
    <div className="col-md-6">
      Title: {props.show_title} <br />
      Year: {props.release_year} <br />
      Cast: {props.show_cast}
    </div>
  </div>
)

export default Movie
