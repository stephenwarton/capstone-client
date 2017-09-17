import React, { Component } from 'react';

const $ = window.$;

class PostArticle extends Component{
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      url: ""
    };
  };

  onSubmit(e){
    e.preventDefault();
    this.props.postArticle(this.state.url);
    $('#PostModal').modal('hide');
  }

  handleChange(e){
    const target = e.target;
    this.setState((prevState,props) => {
      prevState[target.id] = target.value
    });
  }

  render(){
    return(
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#PostModal" >
          Add New Article
        </button>
        <div className="modal fade" id="PostModal" tabIndex="-1" role="dialog" aria-labelledby="PostModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="PostModalLabel">Add New Article</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <label htmlFor="url">Please provide article URL:</label>
                  <input className="form-control" type="text" placeholder="url" id="url" onChange={this.handleChange}/>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add Article</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostArticle;
