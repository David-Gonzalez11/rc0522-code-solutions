
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
    if (this.state.count <= 3) {
      return <button onClick={this.handleClick} className="hot-button btn3">Hot Button!</button>;
    } else if (this.state.count <= 6) {
      return <button onClick={this.handleClick} className="hot-button btn6">Hot-button!</button>;
    } else if (this.state.count <= 9) {
      return <button onClick={this.handleClick} className="hot-button btn9">Hot-button!</button>;
    } else if (this.state.count <= 12) {
      return <button onClick={this.handleClick} className="hot-button btn12">Hot-button!</button>;
    } else if (this.state.count <= 15) {
      return <button onClick={this.handleClick} className="hot-button btn15">Hot-button!</button>;
    } else if (this.state.count >= 16) {
      return <button onClick={this.handleClick} className="hot-button btn18">Hot-button!</button>;
    }
  }
}
export default HotButton;
