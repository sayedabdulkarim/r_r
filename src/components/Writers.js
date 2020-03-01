import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom'

import Writer from './Writer'

export default class Writers extends Component {
  render() {
    // console.log(this.props, ' props');
    const { match } = this.props
    return (
      <div>
        <ul>
          {
            this.props.writers.map(i => {
              return <li key={ i.id }><Link to={`${match.url}/${i.email}`}>{ i.name }</Link></li>
            })
          }
        </ul>

        <Route path={`${match.url}/:email`} render={ (props) => <Writer {...props} {...this.props.writers.find(i => i.email === props.match.params.email )} /> }/>
      </div>
    )
  }
}
