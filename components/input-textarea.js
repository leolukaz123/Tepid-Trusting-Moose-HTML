import React from 'react'

import PropTypes from 'prop-types'

const InputTextarea = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .input-textarea-container {
            width: 100%;
            display: flex;
            position: relative;
          }
          .input-textarea-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-white);
          }
          .input-textarea-icon {
            width: 24px;
            height: 24px;
          }
          .input-textarea-textarea {
            width: 100%;
            height: var(--dl-size-size-medium);
            border-width: 0px;
          }
        `}
      </style>
    </>
  )
}

InputTextarea.defaultProps = {
  textarea_placeholder: 'Enter Textarea',
  rootClassName: '',
}

InputTextarea.propTypes = {
  textarea_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default InputTextarea
