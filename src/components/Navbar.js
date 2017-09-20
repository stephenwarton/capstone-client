import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Player from './Player';
import * as actions from '../actions';

class Navbar extends Component {

  renderLinks() {
    if(this.props.authenticated){
      return (
        <li className="navbar-nav">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      )
    } else {
      return (
        <li className="navbar-nav">
          <Link className="nav-link" to="/newAccount">Create New Account</Link>
        </li>
      )
    }
  }

    renderPlayer() {
      if(this.props.status){
        return (
          <div className="container">
            <Player status={this.props.status} setPlayingStatus={this.props.setPlayingStatus}/>
          </div>
        )
      }
    }

  render() {
    return (
      <nav className="navbar sticky-top">
        <div className="container">
            <Link to="/dashboard">
              <span className="h1 navbar-brand mb-0">Article Articulator</span>
            </Link>
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
          {this.renderPlayer()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    status: state.auth.status
  };
}

export default connect(mapStateToProps, actions)(Navbar);
