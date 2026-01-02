import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      username: '',
      password: ''

    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>Username:
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
      </label>
      <label>Password:
        <input type="text" value={this.state.password} onChange={this.handlePasswordChange}></input>
      </label>
      <input type='submit' value="sign up"></input>
    </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);

export default RegistrationForm;
