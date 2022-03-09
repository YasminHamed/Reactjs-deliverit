import React, { Component } from 'react'
import "./App.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div class="titlebar">
                    <img src="logo 1.png" height="80px" alt=""/>
                    <div class="aa">
                        <a class="aa1" href="#">Home</a>
                        <a class="aa2" href="#">Services</a>
                        <a class="aa3" href="#">About Us</a>
                        <a class="aa4" href="#">Help Center</a>
                        <a class="login" href="#">Login</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar