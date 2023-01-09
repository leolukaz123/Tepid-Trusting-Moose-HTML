import React from 'react'

import PropTypes from 'prop-types'

const InputNumber = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .input-number-container {
            width: 100%;
            display: flex;
            position: relative;
          }
          .input-number-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-white);
          }
          .input-number-icon {
            width: 24px;
            height: 24px;
          }
          .input-number-textinput {
            width: 100%;
            border-width: 0px;
          }
        `}
      </style>
    </>
  )
}

InputNumber.defaultProps = {
  textinput_placeholder: 'Enter Number',
  rootClassName: '',
}

InputNumber.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default InputNumber
