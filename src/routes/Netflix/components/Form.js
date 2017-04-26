import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField from 'redux-form-field-wrapper'

import validate from './Validation'

const Form = props => {
  const {handleSubmit, invalid, pristine, submitting} = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="searchString"
          component={renderField}
          type="text"
          label="Netflix"
          placeholder="Search by Movie Title"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={pristine || submitting || invalid}>
        Send
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'netflixSearch',
  validate
})(Form)
