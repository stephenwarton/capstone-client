import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Article from './Article';

class Dashboard extends Component {
  componentWillMount(){
    this.props.fetchArticles();
    this.props.fetchPlaylists();
  }

  render(){
    let articles = this.props.articles;
    if(articles){
      articles = articles.map(article => {
        return <Article key={article.id} article={article} />
      })
    } else {
      articles = [];
    }

    let playlists = this.props.playlists;
    if(playlists){
      playlists = playlists.map(playlist => {
        let key = Object.keys(playlist)[0]
        return (
          <div key={key} className="card">
            <div className="card-body">
              <h4>{key}</h4>
              {playlist[key].map(article => {
                return <Article key={article.article_id} article={article} />
              })}
            </div>
          </div>
        )
      })
    } else {
      playlists = [];
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
              <h3>Articles</h3>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.onOpenNewModal}>
                Add New Article
              </button>
            {articles}
          </div>
          <div className="col">
            <h3>Playlists</h3>
            {playlists}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
          articles: state.auth.articles,
          playlists: state.auth.playlists
        };
}

export default connect(mapStateToProps, actions)(Dashboard);
