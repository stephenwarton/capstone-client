import React, { Component } from 'react';

import AddToPlaylistModal from './AddToPlaylistModal';

class Article extends Component {
  constructor(props) {
  super(props);

  this.handleDelete = this.handleDelete.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.handlePlay = this.handlePlay.bind(this);

  }

handleDelete(e){
  e.preventDefault();
  this.props.deleteArticle(this.props.article.id, this.props.fetchArticles, this.props.fetchPlaylists);
}

handleAdd(e){
  e.preventDefault();
  console.log(this.props.article.id);
}

handlePlay(e){
  e.preventDefault();
  console.log(this.props.article.id);
}

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                {this.props.article.title}
              </div>
              <div className="col">
                <button type="button" className="btn btn-success" onClick={this.handlePlay}><span className="oi oi-media-play"></span></button>
                <button type="button" className="btn btn-primary" onClick={this.handleAdd} data-toggle="modal" data-target="#ToPlaylistModal"><span className="oi oi-plus"></span></button>
                <button type="button" className="btn btn-danger" onClick={this.handleDelete}><span className="oi oi-trash"></span></button>
              </div>
            </div>
          </div>
        </div>
        <AddToPlaylistModal playlists={this.props.playlists} fetchPlaylists={this.props.fetchPlaylists} addToPlaylist={this.props.addToPlaylist} articleId={this.props.article.id}/>
      </div>
    )
  }
}

export default Article;
