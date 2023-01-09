import React from 'react'

import PropTypes from 'prop-types'

import './input-date.css'

const InputDate = (props) => {
  return (
    <div className={`input-date-container ${props.rootClassName} `}>
      <div className="input-date-container1">
        <svg viewBox="0 0 1024 1024" className="input-date-icon">
          <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
        </svg>
        <input
          type="date"
          placeholder={props.textinput_placeholder}
          className="input-date-textinput input"
        />
      </div>
    </div>
  )
}

InputDate.defaultProps = {
  textinput_placeholder: 'Enter Date',
  rootClassName: '',
}

InputDate.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default InputDate
