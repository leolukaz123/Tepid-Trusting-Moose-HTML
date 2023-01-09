import React from 'react'

import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <>
      <div className={`button-container ${props.rootClassName} `}>
        <button className="button-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .button-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
          }
          .button-button {
            color: var(--dl-color-gray-white);
            width: 100%;
            cursor: pointer;
            max-width: var(--dl-size-size-xxlarge);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            text-align: center;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-rounded);
            background-color: var(--dl-color-primary-500);
          }
          .button-root-class-name {
            margin-top: var(--dl-space-space-twounits);
          }
          @media (max-width: 479px) {
            .button-button {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Button.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

Button.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button
