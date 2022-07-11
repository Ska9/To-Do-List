import React, { Component } from 'react';

import Item from './Components/Item/Item'
import AddItem from './Components/AddItem/AddItem'

import './App.css';

class App extends Component {

  state = {
    items : [
      
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return (
        item.id !== id
      )
    })
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center">To Do App</h1>
        <Item items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
     );
  }
}

export default App;
