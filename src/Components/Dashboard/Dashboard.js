import React, { Component } from "react";
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
  delete = (id) => {
    axios.delete(`/api/product/${id}`)
      .then(res => {
        this.setState({
          products: res.data
        })
      }).catch(error => console.log(error))
  }

  render() {
    const newProducts = this.products.map((e, id) => (
      <Product key={id} data={e} />
    ))
    return (
      <div>
        <h1>Dashboard</h1>
        {newProducts}
      </div>
    );
  }
}

export default Dashboard;