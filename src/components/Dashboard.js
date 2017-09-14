import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  componentWillMount(){
    this.props.fetchArticles();
  }
  render(){
    console.log(this.props.articles)
    let articles = this.props.articles;
    if(articles){
      articles = articles.map(article => {
        return (
          <div>{article.title}</div>
        )
      })
    } else {
      articles = [];
    }
    return (
      <div className="container">
        Articles
        {articles}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { articles: state.auth.articles };
}

export default connect(mapStateToProps, actions)(Dashboard);
