import React from 'react'

import PropTypes from 'prop-types'

import './input-number.css'

const InputNumber = (props) => {
  return (
    <div className={`input-number-container ${props.rootClassName} `}>
      <div className="input-number-container1 input_class">
        <svg viewBox="0 0 1024 1024" className="input-number-icon">
          <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
        </svg>
        <input
          type="number"
          placeholder={props.textinput_placeholder}
          className="input-number-textinput input"
        />
      </div>
    </div>
  )
}

InputNumber.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Enter Number',
}

InputNumber.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default InputNumber
