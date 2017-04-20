import React from 'react'
import {Field, reduxForm} from 'redux-form'

import validate from './Validation'
import renderField from '../../components/RenderField'

const Form = props => {
  const {handleSubmit, pristine, submitting} = props

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
        disabled={pristine || submitting}>
        Send
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'netflixSearch',
  validate
})(Form)
