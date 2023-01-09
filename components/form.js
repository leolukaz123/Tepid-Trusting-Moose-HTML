import React from 'react'

import PropTypes from 'prop-types'

const Form = (props) => {
  return (
    <>
      <div className={`form-container ${props.rootClassName} `}>
        <form className="form-form"></form>
      </div>
      <style jsx>
        {`
          .form-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .form-form {
            width: 80%;
            height: 100px;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Form.defaultProps = {
  rootClassName: '',
}

Form.propTypes = {
  rootClassName: PropTypes.string,
}

export default Form
