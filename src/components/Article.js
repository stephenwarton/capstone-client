import React, { Component } from 'react';

import AddToPlaylistModal from './AddToPlaylistModal';
import * as voice from './Voice';

class Article extends Component {
  constructor(props) {
  super(props);

  this.handleDelete = this.handleDelete.bind(this);
  this.handlePlay = this.handlePlay.bind(this);

  }

handleDelete(e){
  e.preventDefault();
  this.props.deleteArticle(this.props.article.id, this.props.fetchArticles, this.props.fetchPlaylists);
}

handlePlay(e){
  e.preventDefault();
  voice.cancel();
  console.log(this.props.article.id, this.props.article.content);
  voice.speak(this.props.article.content);
}

  render() {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <a target="_blank" href={this.props.article.url}>{this.props.article.title}</a>
              </div>
              <div className="col-4">
                <button type="button" className="btn btn-secondary" onClick={this.handlePlay}><span className="oi oi-media-play"></span></button>
                <button type="button" className="btn btn-secondary" onClick={this.handleAdd} data-toggle="modal" data-target={`#ToPlaylistModal${this.props.article.id}`}><span className="oi oi-plus"></span></button>
                <button type="button" className="btn btn-secondary" onClick={this.handleDelete}><span className="oi oi-trash"></span></button>
              </div>
            </div>
          </div>
        </div>
        <AddToPlaylistModal playlists={this.props.playlists} fetchPlaylists={this.props.fetchPlaylists} addToPlaylist={this.props.addToPlaylist} articleId={this.props.article.id} />
      </div>
    )
  }
}

export default Article;
