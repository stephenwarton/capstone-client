import React, { Component } from 'react';

class PlaylistArticle extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-body">
          {this.props.article.article_title} <span className="oi oi-x"></span>
        </div>
      </div>
    )
  }
}

export default PlaylistArticle;
