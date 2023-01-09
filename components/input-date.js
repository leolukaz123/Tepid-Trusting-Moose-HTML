import React from 'react'

import PropTypes from 'prop-types'

const InputDate = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .input-date-container {
            width: 100%;
            display: flex;
            position: relative;
          }
          .input-date-container1 {
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
          .input-date-icon {
            width: 24px;
            height: 24px;
          }
          .input-date-textinput {
            width: 100%;
            border-width: 0px;
          }
        `}
      </style>
    </>
  )
}

InputDate.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Enter Date',
}

InputDate.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default InputDate
