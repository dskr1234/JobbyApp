import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class LogIn extends Component {
  state = {username: '', password: '', isShowingError: '', errorMsg: ''}

  getUserName = event => this.setState({username: event.target.value})

  getPassword = event => this.setState({password: event.target.value})

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({isShowingError: 'false'})
  }

  submitFailure = errorMsg1 => {
    this.setState({isShowingError: true, errorMsg: errorMsg1})
  }

  onSubmitUserData = async event => {
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
      this.submitSuccess(data.jwt_token)
    } else {
      console.log(data)
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isShowingError, errorMsg} = this.state

    return (
      <div className="login-container">
        <div className="login-card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitUserData}>
            <div className="input-container">
              <label htmlFor="name" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="name"
                className="input-box"
                placeholder="Username"
                value={username}
                onChange={this.getUserName}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="input-box"
                placeholder="Password"
                value={password}
                onChange={this.getPassword}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="login-button">
                Login
              </button>
              {isShowingError ? <p className="error-msg">*{errorMsg}</p> : ''}
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default LogIn
