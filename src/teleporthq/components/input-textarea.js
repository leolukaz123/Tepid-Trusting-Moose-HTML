import React from 'react'

import PropTypes from 'prop-types'

import './input-textarea.css'

const InputTextarea = (props) => {
  return (
    <div className="input-textarea-container">
      <div className="input-textarea-container1 input_class">
        <svg viewBox="0 0 1024 1024" className="input-textarea-icon">
          <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
        </svg>
        <textarea
          placeholder={props.textarea_placeholder}
          className="input-textarea-textarea textarea"
        ></textarea>
      </div>
    </div>
  )
}

InputTextarea.defaultProps = {
  rootClassName: '',
  textarea_placeholder: 'Enter Textarea',
}

InputTextarea.propTypes = {
  rootClassName: PropTypes.string,
  textarea_placeholder: PropTypes.string,
}

export default InputTextarea
