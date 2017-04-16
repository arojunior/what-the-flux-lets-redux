import React from "react"

const App = () => (
  <div className="container">
    <div className="jumbotron">
      <div className="row">
        <div className="col-md-8 col-md-offset-4">
          <h3>"What the Flux?! Let's Redux."</h3>
          <div className="col-md-3">
            <a href="netflix" className="btn btn-danger">
              Netflix search
            </a>
          </div>
          <div className="col-md-3">
            <a href="spotify" className="btn btn-success">
              Spotify search
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
