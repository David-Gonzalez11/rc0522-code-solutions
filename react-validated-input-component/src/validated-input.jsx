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
    const pass = this.state.password ? 'display-none' : '';
    const less8 = (this.state.password && this.state.password.length < 8) ? '' : 'display-none';
    const icons = this.state.password.length < 8 ? 'fas fa-times' : 'fas fa-check';
    return (
      <div className="row">
        <form>
          <label htmlFor="pass">Password</label>
          <input type="password" name="password" id="pass" onChange={this.handleChange} />
          <i className={`${icons}`}></i>
          <p className={`message ${pass}`}>A password is required</p>
          <p className={`message ${less8}`}>Your password is too short</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
