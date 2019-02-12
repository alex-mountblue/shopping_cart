import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './components/headerFooter.jsx';
import Home from './components/home.jsx';
import Cart from './components/cart.jsx';
import { viewCart, addToCart, updateCart, removeItem } from './helpers/cart.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ''
    }
  }

  async componentDidMount() {
    const items = await viewCart();
    this.setState({ items });
  }

  handleAdd = (e) => {
    const payload = {
      name: e.target.name,
      price: e.target.value,
      quantity: 1
    }
    let { items } = this.state;
    let add = true;
    items = items.map((item) => {
      if (item.name === payload.name) {
        item.quantity += 1;
        add = false;
        updateCart({ name: item.name, quantity: 1 });
      }
      return item;
    })
    if (add) {
      items.push(payload);
      this.setState({
        items
      })
      addToCart(payload);
    }
  }

  handleIncrease = (e) => {
    console.log(e.target.id);
    const items = this.state.items;
    const index = e.target.id;
    const item = items[index];
    item.quantity = +item.quantity + 1;
    this.setState({
      items
    });

    updateCart({ name: item.name, quantity: 1 });
  }

  handleDecrease = (e) => {
    console.log(e.target.id);
    const items = this.state.items;
    const index = e.target.id;
    const item = items[index];
    item.quantity = +item.quantity - 1;
    if (item.quantity === 0) {
      const [removed] = items.splice(index, 1);
      removeItem({ name: removed.name });
    }
    this.setState({
      items
    });
    updateCart({ name: item.name, quantity: -1 });
  }

  handleRemove = (e) => {
    console.log(e.target.id);
    const index = e.target.id;
    const items = this.state.items;
    const [item] = items.splice(index, 1);
    console.log('item splice', item);
    this.setState({
      items
    });
    removeItem({ name: item.name });
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
        <Header />
          <Route exact path="/" render={(props) => <Home {...props} items={this.state.items} add={this.handleAdd} />}></Route>
          <Route path="/cart" render={(props) => <Cart {...props} items={this.state.items} increase={this.handleIncrease} decrease={this.handleDecrease} remove={this.handleRemove} />}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
