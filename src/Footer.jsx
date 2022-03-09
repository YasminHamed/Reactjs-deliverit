import React, { Component } from 'react'
import "./App.css";

class Footer extends Component {
    render() {
        return (
            <div>
                <img class="end" src="Group 111.png" width="1253px" alt=""/>
                <img class="person" width="600px" src="120570240_1438492939673479_1452111268841416043_n-removebg-preview.png" alt=""/>
                <div class="apple">
                    <div >
                        <img width="20px" src="apple.png" alt=""/>
                    </div>
                    <div >
                        <p class="p6">download on the</p>
                        <p class="p7"> <strong> App Store</strong></p>
                    </div>
                </div>
                <div class="play">
                    <div >
                        <img width="20px" src="play-store.png" alt=""/>
                    </div>
                    <div >
                        <p class="p6">get it on</p>
                        <p class="p7"> <strong> Play Store</strong></p>
                    </div>
                </div>
                <img class="insta" width="20px" src="Icon awesome-instagram.png" alt=""/>
                <img class="whats" width="20px" src="Icon simple-whatsapp.png" alt=""/>
                <img class="face" width="15px" src="Icon feather-facebook.png" alt=""/>
                <div class="endbar">
                    <a  class="aa11" href="#">Home</a>
                    <a class="aa22"href="#">Services</a>
                    <a class="aa33"href="#">About Us</a>
                    <a class="aa44"href="#">Help Center</a>
                </div>
            </div>
        )
    }
}

export default Footer