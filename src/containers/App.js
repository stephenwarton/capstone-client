import React from 'react';
import { Component } from 'react';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        {
          this.props.authenticated
          ? <div></div>
          : <Login />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(App);
