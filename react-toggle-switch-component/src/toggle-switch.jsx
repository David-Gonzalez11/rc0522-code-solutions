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
    let status = 'off';

    if (this.state.isToggled) {
      status = 'on';
    }

    return (
  <div className="row">
    <div className={status} onClick={this.handleClick}>
      <button className={`toggle-${status}`}></button>
    </div>
    <div>{status.toUpperCase()}</div>
  </div>
    );
  }
}
export default ToggleSwitch;
