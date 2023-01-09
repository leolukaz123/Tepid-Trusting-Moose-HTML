import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Component1 from '../components/component1'
import Form1 from '../components/form1'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Tepid Trusting Moose</title>
          <meta property="og:title" content="Tepid Trusting Moose" />
        </Head>
        <div className="home-container1">
          <Header rootClassName="header-root-class-name"></Header>
          <Component1 rootClassName="component1-root-class-name">
            <Form1 rootClassName="form1-root-class-name"></Form1>
          </Component1>
          <Footer rootClassName="footer-root-class-name"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
