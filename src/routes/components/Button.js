import React from 'react'

export default ({props}) => {
  if (!props.type) {
    props.type = {type: 'button'}
  }

  const value = props.value
  delete props.value

  return (
    <button {...props}>
      {value}
    </button>
  )
}
