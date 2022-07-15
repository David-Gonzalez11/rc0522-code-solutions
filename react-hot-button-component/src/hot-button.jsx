
import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let btnClass = '';

    if (this.state.count <= 3) {
      btnClass = 'btn3';
    } else if (this.state.count <= 6) {
      btnClass = 'btn6';
    } else if (this.state.count <= 9) {
      btnClass = 'btn9';
    } else if (this.state.count <= 12) {
      btnClass = 'btn12';
    } else if (this.state.count <= 15) {
      btnClass = 'btn15';
    } else if (this.state.count >= 16) {
      btnClass = 'btn18';
    }

    return <button onClick={this.handleClick} className={`hot-button ${btnClass}`}>Hot-button!</button>;
  }
}
export default HotButton;
