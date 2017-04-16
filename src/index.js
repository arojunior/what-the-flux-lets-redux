import React from "react"
import { render } from "react-dom"

import { Provider } from "react-redux"
import { store } from "./modules"

import { Router, Route, browserHistory } from "react-router"

import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App"
import Netflix from "./routes/Netflix"
import Spotify from "./routes/Spotify"

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/netflix" component={Netflix} />
      <Route path="/spotify" component={Spotify} />
    </Router>
  </Provider>,
  document.getElementById("root")
)
