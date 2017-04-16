import React, { Component } from "react"
import { connect } from "react-redux"
import { netflixSearch } from "../../modules/Netflix/actions"
import Form from "./components/Form"
import Movie from "./components/Movie"

class Netflix extends Component {
  handleSubmit(values, dispatch) {
    dispatch(netflixSearch(values.searchString))
  }

  render() {
    const { result } = this.props.netflix

    return (
      <div className="container">
        <div className="jumbotron">
          <Form onSubmit={this.handleSubmit.bind(this)} />
        </div>
        <div className="row">
          {result ? <Movie props={result} /> : null}
        </div>
        <div className="row">
          <h4>Output</h4>
          {JSON.stringify(result)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ netflix: state.Netflix })

export default connect(mapStateToProps)(Netflix)
