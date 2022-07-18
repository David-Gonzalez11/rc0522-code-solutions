import React from 'react';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemClicked: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;
    if (this.state.itemClicked === id) {
      this.setState({
        itemClicked: null
      });
    } else {
      this.setState({
        itemClicked: id
      });

    }
  }

  render() {
    const topics = this.props.language;

    const accordionTopics = topics.map(topic =>
   <li key={topic.id}>
    <h5 onClick={this.handleClick} id={topic.language} className="header">{topic.language}</h5>
     <p className={this.state.itemClicked === topic.language ? 'detail' : 'detail hidden'}>{topic.detail}</p>
      </li>
    );
    return (
        <ul>
          {accordionTopics}
        </ul>
    );
  }
}
