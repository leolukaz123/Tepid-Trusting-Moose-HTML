import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component-image"
        />
        <h1>{props.heading}</h1>
        <h3>{props.heading1}</h3>
        <div className="component-container1">{props.children}</div>
        <button className="component-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .component-container {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .component-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .component-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            justify-content: center;
          }
          .component-button {
            margin-top: var(--dl-space-space-twounits);
          }
          .component-root-class-name {
            height: 100%;
          }
        `}
      </style>
    </>
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
