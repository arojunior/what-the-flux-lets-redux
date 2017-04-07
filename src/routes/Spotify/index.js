import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../modules/Spotify/actions'
import List from './components/List'

class Spotify extends Component {

    constructor() {
        super()

        this.state = {
            searchString : null
        }
    }

    handleFieldChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        const {result, spotifySearch} = this.props
        const {searchString} = this.state
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            name="searchString"
                            placeholder="Search by Artist,Track or playlist"
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <div className="row">
                        <button
                            className="btn btn-primary"
                            onClick={() => spotifySearch(searchString)}>Send
                        </button>
                    </div>
                </div>
                <div className="row">
                    {result
                        ? <List props={result} />
                        : null
                    }
                </div>
                <div className="row">
                    <h4>Output</h4>
                    { JSON.stringify(result) }
                </div>
            </div>
        )
    }
}

const mapStateToprops = state => state.Spotify

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
    mapStateToprops,
    mapDispatchToProps
)(Spotify)
