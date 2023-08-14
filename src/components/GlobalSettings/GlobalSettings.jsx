// GlobalSettings.jsx
import React from 'react';

export class GlobalSettings extends React.Component {

  handleBackgroundColorChange = (event) => {
    const newColor = event.target.value;
    this.props.onBackgroundColorChange(newColor);
  };

  handleGlobalColorChange = (event) => {
    const newColor = event.target.value;
    this.props.onGlobalColorChange(newColor);
  };

  render() {
    return (
      <div className="globalSettings">
        <div className="globSet-child">
          <h3 className="titles dark">BACK GROUND CARD COLOR</h3>
          <input
            type="color"
            value={this.props.backgrdColor}
            onChange={this.handleBackgroundColorChange}
          />
        </div>
        <div className="globSet-child">
          <h3 className="titles dark">GLOBAL TEXTS COLOR</h3>
          <input
            type="color"
            value={this.props.globalColor}
            onChange={this.handleGlobalColorChange}
          />
        </div>
        <div className="globSet-child resetButton">
          <button onClick={this.props.resetCard}>RESET</button>
        </div>
      </div>
    );
  }
}
