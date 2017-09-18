import React, { Component } from 'react';

const $ = window.$;

class AddToPlaylistModal extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e){
    e.preventDefault();
    let articleId = this.props.articleId;
    // console.log(articleId, e.target.id);
    this.props.addToPlaylist(articleId, e.target.id,this.props.fetchPlaylists);
    $(`#ToPlaylistModal${articleId}`).modal('hide');
  }

  render(){
    return(
      <div>
        <div className="modal fade" id={`ToPlaylistModal${this.props.articleId}`} tabIndex="-1" role="dialog" aria-labelledby="AddToModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AddToModalLabel">Select Playlist</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {
                  this.props.playlists
                  ? this.props.playlists.map(playlist => {
                  return (
                    <p key={playlist.props.id} id={playlist.props.id} >
                      <button type="button" className="btn btn-primary" onClick={this.handleClick} id={playlist.props.id} >
                        {playlist.props.playlistKey}
                      </button>
                    </p>
                  )})
                  : <div></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddToPlaylistModal;
