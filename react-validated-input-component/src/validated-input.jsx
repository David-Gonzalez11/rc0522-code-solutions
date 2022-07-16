
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
    const requiredField = this.state.password ? 'hidden' : '';
    const lessthan8 = (this.state.password && this.state.password.length < 8) ? '' : 'hidden';
    const passes = this.state.password.length < 8 ? 'fas fa-times' : 'fas fa-check';
    return (
      <div className="row">
        <form>
          <label htmlFor="checked">Password</label>
          <input type="password" name="password" id="checked" onChange={this.handleChange} />
          <i className={`${passes}`}></i>
          <p className={`message ${requiredField}`}>A password is required</p>
          <p className={`message ${lessthan8}`}>Your password is too short</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
