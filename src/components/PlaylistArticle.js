import React, { Component } from 'react';
import * as voice from './Voice';

class PlaylistArticle extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    // console.log('remove', this.props.article.id);
    this.props.removeFromPlaylist(this.props.article.id, this.props.fetchPlaylists);
  }

  handlePlay(e){
    e.preventDefault();
    voice.cancel();
    //console.log(this.props.article.id, this.props.article.content);
    voice.speak(this.props.article.article_content);
    this.props.setPlayingStatus(this.props.article.article_title, true, false);
  }

  render() {
    return (
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <a target="_blank" href={this.props.article.article_url}>{this.props.article.article_title}</a>
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary" onClick={this.handlePlay}><span className="oi oi-media-play"></span></button>
                <button type="button" className="btn btn-secondary x" onClick={this.handleDelete}><small><span className="oi oi-x"></span></small></button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default PlaylistArticle;
