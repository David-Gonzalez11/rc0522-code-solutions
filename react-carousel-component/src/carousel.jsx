import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.handleCircles = this.handleCircles.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.rightClick, 3000);
  }

  leftClick(event) {

    const currentImage = this.state.currentImage;
    if (currentImage === 0) {
      this.setState({ currentImage: 4 });
    } else {
      this.setState({ currentImage: currentImage - 1 });
    }
    clearInterval(this.timer);
    this.timer = setInterval(this.rightClick, 3000);
  }

  rightClick() {
    const currentImage = this.state.currentImage;
    if (currentImage === this.props.images.length - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState({ currentImage: currentImage + 1 });
    }
    clearInterval(this.timer);
    this.timer = setInterval(this.rightClick, 3000);
  }

  handleCircles(event) {
    this.setState({
      currentImage: Number(event.target.id)
    });
  }

  render() {
    const images = this.props.images;
    const currentImage = this.state.currentImage;
    return (
      <>
       <div className="row">
      <div className="arrow-left-icon column">
        <i className="fa-solid fa-angle-left fa-7x" onClick={this.leftClick}></i>
      </div>
      <div className="images column">
        <img src={images[currentImage].url}/>
      </div>
      <div className="arrow-right-icon column">
        <i className="fa-solid fa-chevron-right fa-7x" onClick={this.rightClick}></i>
      </div>
    </div>
<div className="row column-middle">
    <div className="buttons" >
      {
           this.props.images.map((dot, index) => {
             const circles = this.state.currentImage === index ? 'fas fa-circle circle-icon fa-2x' : 'far fa-circle circle-icon fa-2x';
             return (
      <i key={index} id={index} className={circles} onClick={this.handleCircles}></i>
             );
           }
           )
      }
    </div>
 </div>
    </>
    );
  }
}
