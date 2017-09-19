import React, { Component } from 'react';

class Voice extends Component {
  render() {
    return (
      <body>
        <h1>Speech synthesiser</h1>
          <p>Enter some text in the input below and press return  or the "play" button to hear it. change voices using the dropdown menu.</p>
          <form>
            <input type="text" className="txt" />
            <div>
              <label htmlFor="rate">Rate</label><input type="range" min="0.5" max="2" value="1" step="0.1" id="rate"/>
              <div className="rate-value">1</div>
              <div className="clearfix"></div>
            </div>
            <div>
              <label htmlFor="pitch">Pitch</label><input type="range" min="0" max="2" value="1" step="0.1" id="pitch"/>
              <div className="pitch-value">1</div>
              <div className="clearfix"></div>
            </div>
            <select>

            </select>
            <div className="controls">
              <button id="play" type="submit">Play</button>
            </div>
          </form>
      </body>
    )
  }
}

export default Voice;
