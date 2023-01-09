import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
      <h1 className="">{props.heading}</h1>
      <h3 className="">{props.heading1}</h3>
      <div className="component-container1">{props.children}</div>
      <button className="component-button button">{props.button}</button>
    </div>
  )
}

AppComponent.defaultProps = {
  heading: 'Heading',
  heading1: 'Heading',
  button: 'Button',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
