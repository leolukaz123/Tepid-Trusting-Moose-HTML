import React from 'react'

import PropTypes from 'prop-types'

import './form.css'

const Form = (props) => {
  return (
    <div className={`form-container ${props.rootClassName} `}>
      <form className="form-form"></form>
    </div>
  )
}

Form.defaultProps = {
  rootClassName: '',
}

Form.propTypes = {
  rootClassName: PropTypes.string,
}

export default Form
