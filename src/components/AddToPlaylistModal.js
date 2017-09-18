import React, { Component } from 'react';

const $ = window.$;

class AddToPlaylistModal extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e){
    e.preventDefault();
    //this.props.postArticle(this.state.url, this.props.fetchArticles);
    $('#PostModal').modal('hide');
  }

  // componentWillMount(){
  //   let playlists = this.props.playlists;
  //   let playlistItem;
  //   if(playlists){
  //     playlists = playlists.map(playlist => {
  //       let playlistKey = Object.keys(playlist)[0];
  //       let id = playlist[playlistKey][0].playlist_id;
  //       playlistItem = {
  //         name: playlistKey,
  //         id: id
  //       }
  //       playlists.push(playlistItem);
  //       console.log(playlists);
  //       return playlists;
  //     })
  //   } else {
  //     playlists = [];
  //   }
  // }

  render(){
    // let playlists = this.props.playlists;
    // let playlistItem;
    // if(playlists){
    //   playlists = playlists.map(playlist => {
    //     let playlistKey = Object.keys(playlist)[0];
    //     let id = playlist[playlistKey][0].playlist_id;
    //     playlistItem = {
    //       name: playlistKey,
    //       id: id
    //     }
    //     playlists.push(playlistItem);
    //     console.log(playlists);
    //     return playlists;
    //   })
    // } else {
    //   playlists = [];
    // }
    console.log(this.props.playlists)
    return(
      <div>
        <div className="modal fade" id="ToPlaylistModal" tabIndex="-1" role="dialog" aria-labelledby="AddToModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AddToModalLabel">Select Playlist</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.playlists.map(playlist => {
                  return (
                    <p key={playlist.id}>
                      <button type="button" className="btn btn-primary" onClick={this.handleClick} >
                        {playlist.name}
                      </button>
                    </p>
                  )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddToPlaylistModal;
