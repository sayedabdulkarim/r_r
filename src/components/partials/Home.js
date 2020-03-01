import React, { Component } from "react";

import axios from 'axios'

import { Link } from 'react-router-dom'

export default class Home extends Component {
  state = {
    text: '',
    myWishes: [],
    load: 'Loading',
    users: [
      { id: 1, name: 'Ram'},
      { id: 2, name: 'Shyam'},
      { id: 3, name: 'Karan'},
      { id: 4, name: 'Arjun'}
    ]
  }

  handleChange = e => {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    const data = {
      item: this.state.text
    }
    axios.post('http://localhost:5000/sent', data)
      .then(res => res)
      // .then(res => console.log(res.data, ' res'))
      .then(res => this.setState({ text: '', myWishes: [...this.state.myWishes, res.data] }))
      .catch(err => console.log(err))
    // console.log(this.state, ' state');
  }

  componentDidMount() {
    axios.get('http://localhost:5000/data')
      .then(res => res)
      .then(res => this.setState({ myWishes : [...this.state.myWishes, ...res.data] }))
  }
  

  handleDelete = (id) => {
    const newData = this.state.myWishes.filter(i => i._id !== id)
    // const _id = id
    // axios.delete('http://localhost:5000/remove/'+id)
    axios.delete(`http://localhost:5000/remove/${id}`)
      .then(res => res)
      .then(res => this.setState({ myWishes : newData }))
    // console.log(id, ' id')
  }

  render() {
    // console.log(this.state, ' state');
    return (
      <div>
        <ul>
          {
            this.state.users.map(i => {
              return <li key={ i.id }><Link to={`/${i.id}`}>{ i.name } nd my id { i.id }</Link></li>
            })
          }
        </ul>
        <h1>Home</h1>
        <form action="" onSubmit={ this.handleSubmit }>
          <input type="text" name="text" placeholder="Item" value={ this.state.text } onChange={ this.handleChange }/>
          <button type="submit" className="waves-effect waves-light btn">Submit</button>
        </form>
        {
          this.state.myWishes.length ? (
            <div className="collection">
          {
            this.state.myWishes.map(i => {
              return <a onClick={() => this.handleDelete(i._id)} className="collection-item" key={ i._id }>{ i.wish }</a>
            })
          }
        </div>
          ) : <div>{ this.state.load }</div>
        }
        <div className="collection">
        
        </div>
      </div>
    );
  }
}
