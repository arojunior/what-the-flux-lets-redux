const validate = values => {
  const errors = {}
  if (!values.searchString) {
    errors.searchString = 'Movie title could not be empty'
  } else if (values.searchString.length < 3) {
    errors.searchString = 'Sorry, Dude. You should type a little more'
  }
  return errors
}

export default validate
