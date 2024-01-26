import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

class LoginForm extends Component {
  state = {
    type: false,
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isLoading: false,
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({type: !prevState.type}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    this.setState({isLoading: false})

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isLoading: false})
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    this.setState({isLoading: true})
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
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {type, errorMsg, showSubmitError, isLoading} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page">
        <img
          src="https://res.cloudinary.com/defacaof3/image/upload/v1706170570/Instagram_web-removebg-preview_daegkm.png"
          className="login-image"
          alt="Login Display"
        />
        <div className="login-container">
          <img
            src="https://res.cloudinary.com/defacaof3/image/upload/v1706171013/download-removebg-preview_avhbei.png"
            className="login-logo"
            alt="Logo"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <input
              type="text"
              className="input-element"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />

            <input
              type={type ? 'text' : 'password'}
              className="input-element"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <div className="checkbox-element">
              <input
                type="checkbox"
                id="ShowPassword"
                onClick={this.onClickCheckbox}
              />
              <label className="label" htmlFor="ShowPassword">
                Show Password
              </label>
            </div>

            <button type="submit" className="login-button">
              {isLoading ? (
                <Loader type="Oval" color="#ffffff" height={20} width={20} />
              ) : (
                'Login'
              )}
            </button>
            {showSubmitError && <p className="err-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
