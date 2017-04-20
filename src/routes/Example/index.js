import React, {Component} from 'react'
import {connect} from 'react-redux'

import {searchAction} from '../../modules/Example/actions'
import Printer from './components/printer'

class Example extends Component {
  handleClick = () => {
    const {dispatch} = this.props
    dispatch(searchAction('arojunior'))
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <button onClick={this.handleClick} className="btn btn-default">
            Dispatch
          </button>
        </div>
        <Printer props={this.props} />
      </div>
    )
  }
}

export default connect()(Example)
