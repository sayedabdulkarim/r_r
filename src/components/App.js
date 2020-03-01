import React, { Component } from 'react'

import axios from 'axios'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//partials
import Navbar from './partials/Navbar'

import Home from './Home'
import Writers from './Writers'

export default class App extends Component {
  state = {
    writers: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => res)
      .then(res => this.setState({ writers: [...this.state.writers, ...res.data] }))
  }
  
  render() {
    // console.log(this.state, ' state');
    return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/writers" render={ props => <Writers {...props} writers={ this.state.writers }/>}/>
        <Route path="/" component={ Home }/>
      </Switch>
    </Router>
    )
  }
}
