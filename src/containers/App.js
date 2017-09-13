import React, { Component } from 'react';
import '../styles/main.css';
import Navbar from '../components/Navbar'
import Login from '../components/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default App;
