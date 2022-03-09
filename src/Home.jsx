import React, { Component } from 'react';
import About from './About';
import "./App.css";
import Footer from './Footer';
import Navbar from './Navbar';
import Sections from './Sections';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <About/>
                <Sections/>
                <Footer/>
            </div>
        )
    }
}

export default Home;