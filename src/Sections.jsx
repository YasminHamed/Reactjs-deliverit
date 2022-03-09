import React, { Component } from 'react'
import"./App.css";
import Section1 from './Section1';
import Section2 from './Section2';

class Sections extends Component {
  render() {
    return (
      <div>
          <Section1/>
          <Section2/>
      </div>
    )
  }
}

export default Sections