import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dasboard extends Component {
  render(){
    return <div>Dashboard</div>
  }
}

export default connect(null, actions)(Dasboard);
