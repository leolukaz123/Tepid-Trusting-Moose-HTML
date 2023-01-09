import React from 'react'

import PropTypes from 'prop-types'

const Form11 = (props) => {
  return (
    <>
      <div className="form11-container">
        <form className="form11-form">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="form11-textinput input"
          />
          <input
            type="text"
            placeholder={props.textinput_placeholder2}
            className="form11-textinput1 input"
          />
          <input
            type="text"
            placeholder={props.textinput_placeholder1}
            className="form11-textinput2 input"
          />
          <button className="form11-button button">{props.button}</button>
        </form>
      </div>
      <style jsx>
        {`
          .form11-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .form11-form {
            width: 80%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .form11-textinput {
            width: 100%;
          }
          .form11-textinput1 {
            width: 100%;
          }
          .form11-textinput2 {
            width: 100%;
          }
          .form11-button {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

Form11.defaultProps = {
  button: 'Button',
  textinput_placeholder1: 'placeholder',
  textinput_placeholder: 'placeholder',
  textinput_placeholder2: 'placeholder',
  rootClassName: '',
}

Form11.propTypes = {
  button: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Form11
