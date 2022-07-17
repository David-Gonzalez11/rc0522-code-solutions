import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    const news = this.state.isToggled ? 'drawer open' : 'drawer';

    return (
      <div>
        <i className="fa-solid fa-bars fa-2x" onClick={this.handleClick}></i>
        <div onClick={this.handleClick} className={news}>
          <div className="content">
            <h1 onClick={this.handleClick}>Text</h1>
            <a onClick={this.handleClick}>About</a>
            <a onClick={this.handleClick}>Get Started</a>
            <a onClick={this.handleClick}>Sign In</a>
          </div>
        </div>
      </div>
    );
  }

}
