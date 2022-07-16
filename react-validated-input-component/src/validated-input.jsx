
import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const checkIfPassword = (this.state.password ? 'hidden' : '');
    const checkLess8 = (this.state.password && this.state.password < 8 ? '' : 'hidden');
    const checkIfValid = (this.state.password && this.state.password > 8 ? 'fas fa-times' : 'fas fa-check');

    return (
      <div className="row">
        <form>
          <label htmlFor="checked">Password</label>
          <input type="password" name="password" id="checked" onChange={this.handleChange} />
          <i className={`${checkIfValid}`}></i>
          <p className={`message ${checkIfPassword}`}>A password is required</p>
          <p className={`message ${checkLess8}`}>Your password is too short</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
