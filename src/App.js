import React, { Component } from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'

import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Services from "./Components/Services"

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Footer />
      </Router>
    )
  }
}

export default App;
