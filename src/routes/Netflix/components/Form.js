import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Form = (props) => {
    const {handleSubmit, pristine, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field
                    name="searchString"
                    component="input"
                    type="text"
                    placeholder="Search by Movie Title"
                    className="form-control" />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={pristine || submitting}>Send
                </button>
        </form>
    )
}

export default reduxForm({
  form: 'netflixSearch'
})(Form)
