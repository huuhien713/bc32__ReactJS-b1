import React, { Component } from 'react'

import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
