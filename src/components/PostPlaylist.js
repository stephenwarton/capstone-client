import React, { Component } from 'react';

const $ = window.$;

class PostPlaylist extends Component{
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: ""
    };
  };

  onSubmit(e){
    e.preventDefault();
    this.props.postPlaylist(this.state.name, this.props.fetchPlaylists);
    $('#PostPlaylist').modal('hide');
    this.setState({
      name: ""
    });
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
        <button type="button" className="btn btn-secondary header-button" data-toggle="modal" data-target="#PostPlaylist" >
          Create New Playlist
        </button>
        <div className="modal fade" id="PostPlaylist" tabIndex="-1" role="dialog" aria-labelledby="PostPlaylistLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="PostPlaylistLabel">New Playlist</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <label htmlFor="name">Please provide playlist name:</label>
                  <input className="form-control" type="text" placeholder="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-secondary">Create Playlist</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostPlaylist;
