import React, { Component } from 'react';
import * as voice from './Voice';

class Player extends Component{
  constructor(props) {
  super(props);

  this.handlePause = this.handlePause.bind(this);
  this.handlePlay = this.handlePlay.bind(this);
}

handlePause(e){
  e.preventDefault();
  voice.resume();
  this.props.setPlayingStatus(this.props.status.title, true, false);
}

handlePlay(e){
  e.preventDefault();
  voice.pause();
  this.props.setPlayingStatus(this.props.status.title, false, true);
}

  renderButton(){
    if(this.props.status.paused){
      return <button type="button" className="btn btn-secondary" onClick={this.handlePause}><span className="oi oi-media-play"></span></button>
    } else if(this.props.status.playing) {
      return <button type="button" className="btn btn-secondary" onClick={this.handlePlay}><span className="oi oi-media-pause"></span></button>
    }
  }

  renderWords(){
    if(this.props.status.paused){
      return <div>PAUSED:</div>
    } else if(this.props.status.playing) {
      return <div>NOW PLAYING:</div>
    }
  }

  render(){
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              {this.renderWords()}
              {this.props.status.title}
            </div>
            <div className="col-4">
              {this.renderButton()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;
