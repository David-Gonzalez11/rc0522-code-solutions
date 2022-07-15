import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevstate => ({
      isToggled: !prevstate.isToggled
    }));
  }

  render() {
    if (this.state.isToggled) {
      return (
        <div className="row">
          <div className="on" onClick={this.handleClick}>
            <button className="toggle-on">
            </button>
          </div>
          <div>ON</div>
        </div>
      );
    } else if (!this.state.isToggled) {
      return (
        <div className="row">
          <div className="off" onClick={this.handleClick}>
            <button className="toggle-off">
            </button>
          </div>
          <div>OFF</div>
        </div>
      );
    }
  }
}
export default ToggleSwitch;
