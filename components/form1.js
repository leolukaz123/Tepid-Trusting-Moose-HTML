import React from 'react'

import PropTypes from 'prop-types'

import InputString from './input-string'

const Form1 = (props) => {
  return (
    <>
      <div className={`form1-container ${props.rootClassName} `}>
        <form className="form1-form">
          <InputString rootClassName="input-string-root-class-name1"></InputString>
          <InputString
            rootClassName="input-string-root-class-name"
            textinput_placeholder="Enter Name"
          ></InputString>
          <InputString rootClassName="input-string-root-class-name2"></InputString>
        </form>
      </div>
      <style jsx>
        {`
          .form1-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .form1-form {
            width: 80%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Form1.defaultProps = {
  rootClassName: '',
}

Form1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Form1
