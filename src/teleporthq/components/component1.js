import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <div className="component1-container1">
        <a
          href={props.back_icon}
          target="_blank"
          rel="noreferrer noopener"
          className="component1-link"
        >
          <svg viewBox="0 0 1024 1024" className="component1-icon">
            <path
              d="M896 470v84h-604l152 154-60 60-256-256 256-256 60 60-152 154h604z"
              className=""
            ></path>
          </svg>
        </a>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component1-image"
        />
        <h1 className="">{props.heading}</h1>
        <h3 className="">{props.heading1}</h3>
        <div className="component1-container2">{props.children}</div>
        <a href={props.Button} className="component1-link1">
          <Button
            rootClassName="button-root-class-name"
            className="component1-component"
          ></Button>
        </a>
        <svg viewBox="0 0 1024 1024" className="component1-icon2">
          <path
            d="M512 256q70 0 120 50t50 120q0 54-64 111t-64 103h-84q0-46 20-79t44-48 44-37 20-50q0-34-26-59t-60-25-60 25-26 59h-84q0-70 50-120t120-50zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 768v-86h84v86h-84z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

Component1.defaultProps = {
  Button: '/',
  rootClassName: '',
  heading: 'Heading',
  heading1: 'Heading',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  back_icon: '',
}

Component1.propTypes = {
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  back_icon: PropTypes.string,
}

export default Component1
