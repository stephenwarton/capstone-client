import React, { Component } from 'react';

import PlaylistArticle from './PlaylistArticle';
import * as voice from './Voice';

class Playlist extends Component {
  constructor(props) {
  super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
  }

handleDelete(e){
  e.preventDefault();
  this.props.deletePlaylist(this.props.id, this.props.fetchPlaylists);
}

handlePlay(e){
  e.preventDefault();
  voice.cancel();
  let playlist = this.props.playlist;
  let name = this.props.playlistKey;
  //console.log(playlist[name]);
  for(let article of playlist[name]){
    //console.log(article.article_content);
    voice.speak(article.article_content);
    this.props.setPlayingStatus(article.article_title, true, false);
  }
}

handleSkip(e){
  e.preventDefault();
  console.log('skipping');
}

  render() {
    let playlistKey = this.props.playlistKey;
    let playlist = this.props.playlist;
    return (
      <div className="container-fluid">
      <div className="card playlist-container">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h4>{playlistKey}</h4>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary" onClick={this.handlePlay}><span className="oi oi-media-play"></span></button>
              <button type="button" className="btn btn-secondary" onClick={this.handleSkip}><span className="oi oi-media-step-forward"></span></button>
              <button type="button" className="btn btn-secondary" onClick={this.handleDelete}><span className="oi oi-trash"></span></button>
            </div>
          </div>
            {playlist[playlistKey].map(article => {
              // console.log(article)
              let returned;
              if(article.article_id){
                returned = <PlaylistArticle key={article.id} article={article} fetchPlaylists={this.props.fetchPlaylists} removeFromPlaylist={this.props.removeFromPlaylist} setPlayingStatus={this.props.setPlayingStatus}/>
              }
            return returned
          })}
        </div>
      </div>
    </div>
    )
  }
}

export default Playlist;
