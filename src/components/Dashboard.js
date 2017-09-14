import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dasboard extends Component {
  componentWillMount(){
    this.props.fetchArticles();
  }
  render(){
    return <div>Dashboard</div>
  }
}

export default connect(null, actions)(Dasboard);
