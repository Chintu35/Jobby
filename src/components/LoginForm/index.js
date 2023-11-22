import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  inputFieldChange = event => {
    this.setState({username: event.target.value})
  }

  passwordFieldChange = event => {
    this.setState({password: event.target.value})
  }

  onsubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onsubmitFailure = errorText => {
    this.setState({errorMsg: errorText})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onsubmitSuccess(data.jwt_token)
    } else if (response.status === 400) {
      this.onsubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <form className="input-field-form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="logo"
            alt="website logo"
          />
          <div className="input-field-containers">
            <label htmlFor="user-name" className="label">
              USERNAME
            </label>
            <br />
            <input
              onChange={this.inputFieldChange}
              value={username}
              className="input-field"
              type="text"
              placeholder="rahul"
              id="user-name"
            />
            <br />
            <label htmlFor="pass-word" className="label">
              PASSWORD
            </label>
            <br />
            <input
              value={password}
              onChange={this.passwordFieldChange}
              className="input-field"
              type="password"
              placeholder="rahul@2021"
              id="pass-word"
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
          <p className="error-msg">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
