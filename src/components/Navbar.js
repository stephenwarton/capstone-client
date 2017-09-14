import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Navbar extends Component {

  renderLinks() {
    if(this.props.authenticated){
      return (
        <li className="navbar-nav text-white">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      )
    } else {
      return (
        <li className="navbar-nav text-white">
          <Link className="nav-link" to="/newAccount">Create New Account</Link>
        </li>
      )
    }

  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/">
            <span className="h1 navbar-brand mb-0">Article Articulator</span>
          </Link>
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Navbar);
