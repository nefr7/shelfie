import React, { Component } from "react";
import axios from 'axios'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      imageURL: '',
      productName: '',
      price: 0
    }
  }

  update = (id, imageURL, productName, price) => {
    axios.put(`/api/products/edit/${id}`, { imageURL, productName, price })
      .then(res => {
        this.setState({
          products: res.data
        })
      }).catch(error => console.log(error))
  }

  create(imageURL, productName, price) {
    axios.post('/api/product', { imageURL, productName, price }).then(res => {
      this.setState({
        products: res.data
      })
    }).catch(error => console.log(error))
  }

  handleImageURL(e) {
    this.setState({
      imageURL: e.target.value
    })
  }

  handleProductName(e) {
    this.setState({
      productName: e.target.value
    })
  }

  handlePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  handleReset() {
    this.setState({
      imageURL: '', productName: '', price: 0
    })
  }

  render() {

    return (
      <div>
        <h3>Image URL:</h3>
        <input onChange={(e) => {
          this.handleImageURL(e)
        }} />

        <h3>Product Name:</h3>
        <input onChange={(e) => {
          this.handleProductName(e)
        }} />

        <h3>Price:</h3>
        <input onChange={(e) => {
          this.handlePrice(e)
        }} />
        <div>
          <button onClick={(e) => this.handleReset(e)}>Cancel</button>
          <button onClick={(e) => this.handleReset(e)}>Add to inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;