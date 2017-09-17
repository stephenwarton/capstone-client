import React, { Component } from 'react';

class Article extends Component {

  render() {
    return (
      <div>
        { this.props.article.article_id
          ? <div className="card">
              <div className="card-body">
                {this.props.article.article_title}
              </div>
            </div>
          : <div className="card">
              <div className="card-body">
                {this.props.article.title}
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Article;
