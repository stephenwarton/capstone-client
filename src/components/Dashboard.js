import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Article from './Article';
import Playlist from './Playlist';
import PostArticle from './PostArticle';
import PostPlaylist from './PostPlaylist';

class Dashboard extends Component {

  componentWillMount(){
    this.props.fetchArticles();
    this.props.fetchPlaylists();
  }

  render(){
    let playlists = this.props.playlists;
    if(playlists){
      playlists = playlists.map(playlist => {
        let playlistKey = Object.keys(playlist)[0];
        let id = playlist[playlistKey][0].playlist_id;
        return <Playlist key={id} id={id} playlistKey={playlistKey} playlist={playlist} deletePlaylist={this.props.deletePlaylist} fetchPlaylists={this.props.fetchPlaylists} removeFromPlaylist={this.props.removeFromPlaylist}/>
      })
    } else {
      playlists = [];
    }

    let articles = this.props.articles;
    if(articles){
      articles = articles.map(article => {
        return <Article key={article.id} article={article} deleteArticle={this.props.deleteArticle} fetchArticles={this.props.fetchArticles} fetchPlaylists={this.props.fetchPlaylists} playlists={playlists} addToPlaylist={this.props.addToPlaylist}/>
      })
    } else {
      articles = [];
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col header-row-left">
                <h3>Articles</h3>
              </div>
              <div className="col header-row-middle-left">
                <PostArticle postArticle={this.props.postArticle} fetchArticles={this.props.fetchArticles} />
              </div>
            {articles}
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col header-row-middle-right">
              <h3>Playlists</h3>
            </div>
            <div className="col header-row-right">
              <PostPlaylist postPlaylist={this.props.postPlaylist} fetchPlaylists={this.props.fetchPlaylists} />
              </div>
            {playlists}
          </div>
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
          articles: state.auth.articles,
          playlists: state.auth.playlists,
          post: state.auth.post,
          delete: state.auth.delete,
          add: state.auth.add
        };
}

export default connect(mapStateToProps, actions)(Dashboard);
