import React from 'react'

import PropTypes from 'prop-types'

import './input-string.css'

const InputString = (props) => {
  return (
    <div className={`input-string-container ${props.rootClassName} `}>
      <div className="input-string-container1 input_class">
        <svg viewBox="0 0 1024 1024" className="input-string-icon">
          <path
            d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"
            className=""
          ></path>
        </svg>
        <input
          type="number"
          placeholder={props.textinput_placeholder}
          className="input-string-textinput input"
        />
      </div>
    </div>
  )
}

InputString.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Enter Text',
}

InputString.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default InputString
