import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
  super(props);

  this.handleDelete = this.handleDelete.bind(this);

  }

handleDelete(e){
  e.preventDefault();
  this.props.deleteArticle(this.props.article.id, this.props.fetchArticles, this.props.fetchPlaylists);
}

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              {this.props.article.title}
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger" onClick={this.handleDelete}><span className="oi oi-trash"></span></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article;
