import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Logout extends Component {
  componentWillMount(){
    this.props.logoutUser();
  }

  renderAlert(){
    return (
      <div className="alert alert-success">
        <div className="container">
          See you soon!
        </div>
      </div>
    );
  }

  render(){
    return (
      <div>
        {this.renderAlert()}
      </div>
    )
  }
}

export default connect(null, actions)(Logout);
