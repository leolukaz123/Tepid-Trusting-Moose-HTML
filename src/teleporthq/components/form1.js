import React from 'react'

import PropTypes from 'prop-types'

import InputString from './input-string'
import './form1.css'

const Form1 = (props) => {
  return (
    <div className={`form1-container ${props.rootClassName} `}>
      <form className="form1-form">
        <InputString
          rootClassName="input-string-root-class-name1"
          className=""
        ></InputString>
        <InputString
          rootClassName="input-string-root-class-name"
          textinput_placeholder="Enter Name"
          className=""
        ></InputString>
        <InputString
          rootClassName="input-string-root-class-name2"
          className=""
        ></InputString>
      </form>
    </div>
  )
}

Form1.defaultProps = {
  rootClassName: '',
}

Form1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Form1
