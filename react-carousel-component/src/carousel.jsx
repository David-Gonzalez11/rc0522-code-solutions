import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.interval = this.interval.bind(this);
    this.circles = this.circles.bind(this);
  }

  leftClick(event) {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.arrowRight(), 3000);
    if (this.state.currentView <= 1) {
      this.setState({ currentView: this.props.images.length });
    } else {
      this.setState(previousState => ({
        currentView: previousState.currentView - 1
      }));

    }
  }

  rightClick() {
  }

  interval() {

  }

  circles() {

  }

  render() {
    return (
      <>
<div className="container">
    <div className="row">
      <div className="arrow-left-icon column">
        <i className="fa-solid fa-angle-left fa-7x" onClick={this.leftClick}></i>
      </div>
      <div className="images column">
        <img src="https://encrypted-tbn0..com/images?q=tbn:ANd9GcQ6AKNjklQ1jlv8mLgpBmo3wLpEgsYvIqYf0--wmEceLAIQkJMj6sX3QnU_ObXxDPj_E1w&usqp=CAU"/>
      </div>

      <div className="arrow-right-icon column">
        <i className="fa-solid fa-chevron-right fa-7x" onClick={this.rightClick}></i>
      </div>
    </div>

  </div>
  <div className="row column-middle">
    <div className="buttons">
      {/* <i className="fa-regular fa-circle fa-2x" data-view="0"></i>
      <i className="fa-regular fa-circle fa-2x" data-view="1"></i>
      <i className="fa-regular fa-circle fa-2x" data-view="2"></i>
      <i className="fa-regular fa-circle fa-2x" data-view="3"></i>
      <i className="fa-regular fa-circle fa-2x" data-view="4"></i> */}
    </div>
  </div>
</>
    );
  }
}
