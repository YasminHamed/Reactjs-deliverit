import React, { Component } from 'react'
import"./App.css";
import Aside1 from './Aside1';
import Aside2 from './Aside2';

class Section1 extends Component {
  render() {
    return (
        <div>
          <Aside1/>
          <Aside2/>
        </div>
    )
  }
}

export default Section1