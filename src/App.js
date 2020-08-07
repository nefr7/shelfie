import React, { Component } from 'react';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
    this.getAll = this.getAll.bind(this)
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({
          products: res.data
        })
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard getAll={this.getAll} delete={this.delete} />
        <Form create={this.create} />
      </div>
    );
  }
}

export default App;