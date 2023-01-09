import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import Form1 from '../components/form1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Tepid Trusting Moose</title>
        <meta property="og:title" content="Tepid Trusting Moose" />
      </Helmet>
      <div className="home-container1">
        <Header rootClassName="header-root-class-name"></Header>
        <Component1 rootClassName="component1-root-class-name">
          <Form1 rootClassName="form1-root-class-name"></Form1>
        </Component1>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default Home
