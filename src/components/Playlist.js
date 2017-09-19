import React, { Component } from 'react';

import PlaylistArticle from './PlaylistArticle';

class Playlist extends Component {
  constructor(props) {
  super(props);

  this.handleDelete = this.handleDelete.bind(this);

  }

handleDelete(e){
  e.preventDefault();
  this.props.deletePlaylist(this.props.id, this.props.fetchPlaylists);
}

  render() {
    let playlistKey = this.props.playlistKey;
    let playlist = this.props.playlist;
    return (
      <div className="card playlist-container">
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <h4>{playlistKey}</h4>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger" onClick={this.handleDelete}><span className="oi oi-trash"></span></button>
            </div>
          </div>
            {playlist[playlistKey].map(article => {
              // console.log(article)
              let returned;
              if(article.article_id){
                returned = <PlaylistArticle key={article.id} article={article} fetchPlaylists={this.props.fetchPlaylists} removeFromPlaylist={this.props.removeFromPlaylist}/>
              }
            return returned
          })}
        </div>
      </div>
    )
  }
}

export default Playlist;
