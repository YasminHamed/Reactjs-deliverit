import React, { Component } from 'react'
import"./App.css";
// components
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className='all'>
        <Home/>
      </div>
    )
  }
}

export default App