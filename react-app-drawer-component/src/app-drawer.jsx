import React from 'react';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
    this.handleNavBar = this.handleNavBar.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleNavBar() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  handleHide() {
    if (this.state.isToggled === true) {
      return '';
    } else {
      return 'hidden';
    }
  }

  render() {
    return (
    <div className="row">
           <i className="fa-solid fa-bars" onClick={this.handleNavBar}></i>
   <div className={`modal ${this.handleHide()}`}>
     <div className={`overlay ${this.handleHide()}`} onClick={this.handleNavBar}></div>
  <h1 onClick={this.handleNavBar} className={this.handleHide}>Menu</h1>
  <h4 href="#" onClick={this.handleNavBar} className={this.handleHide()}>About</h4>
  <h4 href="#" onClick={this.handleNavBar} className={this.handleHide()}>Get started</h4>
  <h4 href="#" onClick={this.handleNavBar} className={this.handleHide()}>Sign in</h4>
   </div>
</div>
    );
  }
}
