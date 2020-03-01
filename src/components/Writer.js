import React, { Component } from 'react'

export default class Writer extends Component {
  render() {
    const { id, name, email, body } = this.props
    console.log(this.props, ' writer');
    return (
      <div>
        <h1>My id is { id }</h1>
        <h2>my name is { name }</h2>
        <h3>my email is { email }</h3>
        <h4>{ body }</h4>
      </div>
    )
  }
}
