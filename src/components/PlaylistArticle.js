import React, { Component } from 'react';

class PlaylistArticle extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(e){
    e.preventDefault();
    // console.log('remove', this.props.article.id);
    this.props.removeFromPlaylist(this.props.article.id, this.props.fetchPlaylists);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              {this.props.article.article_title}
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
