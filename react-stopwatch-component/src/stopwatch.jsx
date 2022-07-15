import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isPlayed: false
    };
    this.currentTime = this.currentTime.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
  }

  currentTime() {
    this.setState({
      value: this.state.value + 1
    });
  }

  handleButtonClick() {
    this.setState({
      isPlayed: !this.state.isPlayed
    });
    if (!this.state.isPlayed) {
      this.timer = setInterval(
        () => this.currentTime(),
        1000
      );
    } else if (this.state.isPlayed) {
      clearInterval(this.timer);
    }
  }

  handleFaceClick() {
    if (!this.state.isPlayed) {
      this.setState({
        value: 0
      });
    }
  }

  changeButton() {
    const play = 'play';
    const pause = 'pause';
    if (!this.state.isPlayed) return play;
    if (this.state.isPlayed) return pause;
  }

  render() {
    const buttonClass = this.changeButton();
    return (
      <div>
        <div className="center">
          <div onClick={this.handleFaceClick} className="circle center">
            <div className="count">{this.state.value}</div>
          </div>
        </div>
        <div className="margin center">
          <i onClick={this.handleButtonClick} className={`button fas fa-${buttonClass}`}>
          </i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
