import React, { Component } from 'react'
import"./App.css";

class Aside1 extends Component {
  render() {
    return (
      <div>
            <img class="motor" src="Group 140.png" width="150px" alt=""/>
            <h3 class="h">Super Fast Delivery</h3>
            <p class="p">We only need 45-60 minutes to get</p>
            <p class="P2"> your product into your customer’s hands.</p>
            <img class="road" src="second_section_.png"  width="900px" alt=""/>
            <img class="clock" src="Group 152.png" width="150px" alt=""/>
            <h3 class="hh">Real Time Tracking</h3>
            <p class="pp">Check in any time to see where your delivery is & when it will reach your customer</p>
            <img class="discount" src="Group 1020.png" width="150px" alt=""/>
            <h3 class="hhh">Discounts</h3>
            <p class="ppp">Growing from 30 to 300 deliveries a week? Take advantage of our volume-based discounts.</p>
      </div>
    )
  }
}

export default Aside1