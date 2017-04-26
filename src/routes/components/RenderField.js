import React from 'react'

const RenderField = ({
  input,
  label,
  placeholder,
  inputClass,
  labelClass,
  divClass,
  type,
  meta: {touched, error, warning}
}) => (
  <div className={divClass}>
    {label &&
      <div className={labelClass}>
        <label>{label}</label>
      </div>}
    <div className={inputClass}>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className="form-control"
      />
    </div>
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
)

export default RenderField
